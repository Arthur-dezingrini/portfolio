const ulForm = document.getElementById("ul-form");

(function(){
    emailjs.init("0v_ZALNIMQO5kz_Vt"); 
})();

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_931rtm2', 'template_e9d0s8h', this)
        .then(function(response) {
            alert("mensagem enviadacom sucesso")
        }, function(error) {
           alert("algo deu errado, tente novamente mais tarde")
        },
    );
});