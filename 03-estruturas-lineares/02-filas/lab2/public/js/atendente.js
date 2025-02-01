const $senha = document.querySelector("#senha");
const $cliente = document.querySelector("#cliente");
const $chamar = document.querySelector("#chamar");

$chamar.addEventListener("click", chamarProximo);

async function verificar() {
  try {
    const response = await fetch("/front");
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

async function chamarProximo() {
  setLoading(true);

  try {
    await fetch("/dequeue");
  } catch (error) {
    alert("Erro ao chamar próximo cliente!");
  }

  setLoading(false);
}

function setLoading(isLoading) {
  if (isLoading) {
    $chamar.disabled = true;
    $chamar.querySelector(".btn-text").textContent = "Aguarde...";
  } else {
    $chamar.disabled = false;
    $chamar.querySelector(".btn-text").textContent = "Chamar próximo cliente";
  }
}
