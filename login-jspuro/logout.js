let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

if (localStorage.getItem("token") == null) {
  alert("VocÊ precisa estar logado para acessar esta pagina");
  window.location.href = "http://127.0.0.1:5500/login.html";
}

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "http://127.0.0.1:5500/login.html";
}
