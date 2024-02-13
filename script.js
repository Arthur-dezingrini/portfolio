const ul = document.getElementById("ul");
const username = "Arthur-dezingrini";
const token = "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";
const apiUrl = `https://api.github.com/users/${username}/repos?type=public`;

function getApiGitHub() {
  fetch(apiUrl, {
    headers: {
      Authorization: `token ${token}`
    }
  }) 
    .then(async res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      
      const data = await res.json();
      data.forEach(async item => {
        const readmeUrl = `https://api.github.com/repos/${username}/${item.name}/readme`;
        const readmeResponse = await fetch(readmeUrl, {
          headers: {
            Authorization: `token ${token}`
          }
        });
        const readmeData = await readmeResponse.json();
        const readmeContent = atob(readmeData.content);

        let li = document.createElement("li");
        li.innerHTML = `
          <h2><strong>${item.name.toUpperCase()}</strong></h2>
          <p>${readmeContent}</p>
          <p><a href="${item.html_url}">Visualizar repositorio</a></p>
        `;
        ul.appendChild(li);
      });
    })
    .catch(e => console.log(e));
}

getApiGitHub();