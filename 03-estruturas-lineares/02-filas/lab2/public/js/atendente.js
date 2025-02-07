const $senha = document.querySelector("#senha");
const $cliente = document.querySelector("#cliente");
const $prioridade = document.querySelector("#prioridade");
const $chamar = document.querySelector("#chamar");
const $fila = document.querySelector("#fila");

$chamar.addEventListener("click", chamarProximo);

async function verificar() {
  const response = await fetch("/front");
  const { name, ticket, priority } = await response.json();

  $cliente.textContent = name || "Nenhum cliente";
  $senha.textContent = ticket ? `BD${ticket.toString().padStart(4, "0")}` : "------";
  $prioridade.style.display = priority <= 0 ? "none" : null;
}

async function listarProximos() {
  const response = await fetch("/queue");
  const { items } = await response.json();

  $fila.innerHTML = "";

  for (const [i, item] of Object.entries(items.slice(0, 5))) {
    $fila.innerHTML += `
      <li class="flex items-center gap-6 w-full bg-blue-100 px-4 py-3 text-2xl font-mono rounded-md mb-2">
        <div class="font-black">${+i + 1}º</div>
        <div class="font-bold">BD${item.ticket
          .toString()
          .padStart(4, "0")}</div>
        <div>
          <div class="italic">${item.name}</div>
          <div class="text-sm">Prioridade ${
            item.priority <= 0 ? "normal" : item.priority
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

async function chamarProximo() {
  setLoading(true);

  try {
    await fetch("/dequeue");
    verificar();
    listarProximos();
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
