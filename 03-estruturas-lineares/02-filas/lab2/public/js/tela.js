const $senha = document.querySelector("#senha");
const $cliente = document.querySelector("#cliente");
const $telaPrincipal = document.querySelector("#tela-principal");

let ultimaSenha;
const alerta = new Audio("sounds/alerta.mp3");

async function verificar() {
  try {
    const response = await fetch("http://localhost:3000/front");
    const { name, ticket } = await response.json();

    $cliente.textContent = name || "---------------";
    $senha.textContent = ticket
      ? `BD${ticket.toString().padStart(4, "0")}`
      : "------";

    if (ultimaSenha === undefined) {
      ultimaSenha = ticket;
      return;
    }

    if (ultimaSenha === ticket) return;

    if (ticket === null) return;

    chamarSenha(name, ticket);
    ultimaSenha = ticket;
  } catch (error) {}
}

setInterval(verificar, 1000);

function chamarSenha(name, ticket) {
  $telaPrincipal.classList.remove("alerta");
  setTimeout(() => $telaPrincipal.classList.add("alerta"), 100);

  alerta.play();
  alerta.addEventListener("ended", falar);

  function falar() {
    alerta.removeEventListener("ended", falar);
    const zeros = "0 ".repeat(4 - ticket.toString().length);
    const utterance = new SpeechSynthesisUtterance(
      `Atenção! Senha B D ${zeros}${ticket}. ${name}. Favor, comparecer ao guichê mais próximo`
    );
    window.speechSynthesis.speak(utterance);
  }
}
