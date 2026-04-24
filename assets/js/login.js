const email = "admin@exemplo.com";
const senha = "1234";

function verificarCredenciais() {
    const emailformado = document.getElementById("email").value;
    const senhaformada = document.getElementById("senha").value;

    if (emailformado === email) {
        alert("Email informado corretamente");

        if (senhaformada === senha) {
            alert("Senha informada corretamente!");
            window.location = "home.html";
        } else
            alert("Senha informada incorretamente!");
    } else
        alert("Email informado incorretamente! ");

}



