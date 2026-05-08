import {usuario} from "./bd.js";

const email = usuario.email;
const senha = usuario.senha;

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

document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("button");
    botao.addEventListener("click", (e) => {
        e.preventDefault();
        verificarCredenciais();

    });
});
