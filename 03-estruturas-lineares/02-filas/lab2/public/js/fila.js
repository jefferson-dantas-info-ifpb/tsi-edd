const $telaPrincipal = document.querySelector("#tela-principal");
const $telaPronto = document.querySelector("#tela-pronto");
const $telaFora = document.querySelector("#tela-fora");
const $continuar = document.querySelector("#continuar");
const $nome = document.querySelector("#nome");
const $posicao = document.querySelector("#posicao");
const $senha = document.querySelector("#senha");
const $cliente = document.querySelector("#cliente");

$continuar.addEventListener("click", continuar);

async function continuar() {
  const nome = $nome.value;

  if (nome === "") {
    alert("Por favor, informe o nome do cliente!");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("http://localhost:3000/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ element: nome }),
    });

    const json = await response.json();
    const { name, ticket, pos } = json;

    if (name && ticket && pos >= 1) {
      $cliente.textContent = name;
      $senha.textContent = `BD${ticket.toString().padStart(4, "0")}`;
      $posicao.textContent = pos;
      $telaPrincipal.style.display = "none";
      $telaPronto.style.display = null;
    } else {
      $telaPrincipal.style.display = "none";
      $telaFora.style.display = null;
    }
  } catch (error) {
    alert("Erro ao consultar posição do cliente na fila!");
  }

  setLoading(false);
}

function setLoading(isLoading) {
  if (isLoading) {
    $continuar.disabled = true;
    $nome.disabled = true;
    $continuar.querySelector(".btn-text").textContent = "Aguarde...";
  } else {
    $continuar.disabled = false;
    $nome.disabled = false;
    $continuar.querySelector(".btn-text").textContent = "Continuar";
  }
}
