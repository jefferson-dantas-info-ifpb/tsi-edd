const $telaPrincipal = document.querySelector("#tela-principal");
const $telaPronto = document.querySelector("#tela-pronto");
const $continuar = document.querySelector("#continuar");
const $nome = document.querySelector("#nome");
const $posicao = document.querySelector("#posicao");
const $senha = document.querySelector("#senha");
const $cliente = document.querySelector("#cliente");
const $prioridade = document.querySelector("#prioridade");
const $prioridades = [
  document.querySelector("#deficiencia-fisica"),
  document.querySelector("#deficiencia-visual"),
  document.querySelector("#deficiencia-auditiva"),
  document.querySelector("#gestante"),
  document.querySelector("#idoso"),
  document.querySelector("#obesidade"),
  document.querySelector("#lactante"),
  document.querySelector("#autista"),
];

$continuar.addEventListener("click", continuar);

async function continuar() {
  const nome = $nome.value;

  if (nome === "") {
    alert("Por favor, informe o nome do cliente!");
    return;
  }

  let maiorPrioridade = 0;
  let quantidadePrioridades = 0;
  for (const $prioridade of $prioridades) {
    if ($prioridade.checked) {
      quantidadePrioridades++;
      const valor = parseInt($prioridade.value);
      if (maiorPrioridade < valor) maiorPrioridade = valor;
    }
  }

  const prioridade = maiorPrioridade + quantidadePrioridades;

  setLoading(true);

  try {
    const response = await fetch("/enqueue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ element: nome, priority: prioridade }),
    });

    const json = await response.json();
    const { name, ticket, priority, pos } = json;

    $cliente.textContent = name;
    $senha.textContent = `BD${ticket.toString().padStart(4, "0")}`;
    $prioridade.style.display = priority === 0 ? "none" : null;
    $posicao.textContent = pos;
    $telaPrincipal.style.display = "none";
    $telaPronto.style.display = null;
  } catch (error) {
    alert("Erro ao adicionar cliente na fila!");
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
