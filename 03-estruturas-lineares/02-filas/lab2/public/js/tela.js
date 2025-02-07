const $senha = document.querySelector("#senha");
const $cliente = document.querySelector("#cliente");
const $prioridade = document.querySelector("#prioridade");
const $telaPrincipal = document.querySelector("#tela-principal");
const $fila = document.querySelector("#fila");
const $tempo = document.querySelector("#tempo");

let ultimaSenha;
const alerta = new Audio("sounds/alerta.mp3");

async function verificar() {
  const response = await fetch("/front");
  const { name, ticket, priority } = await response.json();

  $cliente.textContent = name || "----------";
  $senha.textContent = ticket
    ? `BD${ticket.toString().padStart(4, "0")}`
    : "------";
  $prioridade.style.display = priority <= 0 ? "none" : null;

  if (ultimaSenha === undefined) {
    ultimaSenha = ticket;
    return;
  }

  if (ultimaSenha === ticket) return;

  if (ticket === null) return;

  chamarSenha(name, ticket);
  ultimaSenha = ticket;
}

async function listarProximos() {
  const response = await fetch("/queue");
  const { items, timeAvg } = await response.json();

  $fila.innerHTML = "";

  if (timeAvg) {
    const timeAvgSec = Math.floor(timeAvg / 1000);
    const timeAvgMin = Math.floor(timeAvgSec / 60);
    if (timeAvgMin > 0) {
      $tempo.textContent = `${timeAvgMin} minuto${timeAvgMin > 1 ? "s" : ""}`;
    } else {
      $tempo.textContent = `${timeAvgSec} segundo${timeAvgSec > 1 ? "s" : ""}`;
    }
  }

  for (let i = 0; i < 4; i++) {
    const item = items[i];
    $fila.innerHTML += `
      <li class="flex items-center gap-6 w-full bg-blue-100 px-4 py-3 text-[1.3rem] font-mono rounded-md mb-2">
        <div class="font-black">${+i + 1}º</div>
        <div class="font-bold text-nowrap">${item ? "BD" : "--"}${
      item?.ticket.toString().padStart(4, "0") || "----"
    }</div>
        <div>
          <div class="italic">${
            item?.name || "------------------------------"
          }</div>
          <div class="text-sm ${!item ? "hidden" : ""}">Prioridade ${
      item?.priority <= 0 ? "normal" : item?.priority
    }</div>
        </div>
      </li>
    `;
  }
}

setInterval(verificar, 1000);
setInterval(listarProximos, 1000);
verificar();
listarProximos();

function chamarSenha(name, ticket) {
  $telaPrincipal.classList.remove("alerta");
  setTimeout(() => $telaPrincipal.classList.add("alerta"), 100);

  alerta.play();
  alerta.addEventListener("ended", falar);

  function falar() {
    alerta.removeEventListener("ended", falar);
    const zeros = "0 ".repeat(4 - ticket.toString().length);
    const utterance = new SpeechSynthesisUtterance(
      `Senha B D ${zeros}${ticket}. ${name}. Favor, comparecer ao guichê mais próximo`
    );
    window.speechSynthesis.speak(utterance);
  }
}
