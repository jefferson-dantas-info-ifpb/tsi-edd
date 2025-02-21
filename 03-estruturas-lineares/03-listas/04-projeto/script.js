import { LinkedList } from "./linked-list.js";

const $contatos = document.querySelector("#contatos");
const $adicionarEditar = document.querySelector("#adicionar-editar");
const $adicionarTitulo = document.querySelector("#adicionar-titulo");
const $nome = document.querySelector("#nome");
const $email = document.querySelector("#email");

$adicionarEditar.addEventListener("click", adicionarEditarContato);

let contatoEditando = null;

class Contato {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
}

const contatos = new LinkedList();
contatos.add(new Contato("João", "joao@email.com"));
contatos.add(new Contato("Fernando", "fernando@email.com"));
contatos.add(new Contato("Ana", "ana@email.com"));
contatos.add(new Contato("José", "jose@email.com"));
contatos.add(new Contato("Maria", "maria@email.com"));
contatos.add(new Contato("Paulo", "paulo@email.com"));
contatos.add(new Contato("Carla", "carla@email.com"));
contatos.add(new Contato("Lucas", "lucas@email.com"));
contatos.add(new Contato("Mariana", "mariana@email.com"));
contatos.add(new Contato("Pedro", "pedro@email.com"));

function renderizeList() {
  $contatos.innerHTML = "";

  let head = contatos.head;
  while (head !== null) {
    const element = head.element;
    const $item = document.createElement("li");
    $item.classList.add(
      "border-t",
      "last:border-b",
      "px-2",
      "py-1",
      "border-slate-300",
      "hover:bg-slate-300"
    );
    $item.innerHTML = `
      <a
        href="mailto:${element.email}"
        class="flex gap-4 items-center"
        target="_blank"
      >
        <div class="flex-1 font-medium text-xl">${element.nome}</div>
        <div class="opacity-50 italic">${element.email}</div>
        <div class="flex gap-1">
          <button
            title="Editar"
            class="editar p-2 rounded-lg hover:bg-blue-400 text-slate-700"
          >
            <i class="fa-solid fa-fw fa-pencil"></i>
          </button>
          <button
            title="Excluir"
            class="excluir p-2 rounded-lg hover:bg-red-400 text-slate-700"
          >
            <i class="fa-solid fa-fw fa-trash-can"></i>
          </button>
        </div>
      </a>
    `;

    $item.querySelector(".editar").addEventListener("click", (e) => {
      e.preventDefault();
      contatoEditando = element;
      $nome.value = element.nome;
      $email.value = element.email;
      $adicionarTitulo.innerText = "Editar contato";
      $adicionarEditar.innerText = "Editar";
      $adicionarTitulo.scrollIntoView({ behavior: "smooth" });
    });

    $item.querySelector(".excluir").addEventListener("click", (e) => {
      e.preventDefault();
      contatos.remove(element);
      renderizeList();
    });

    $contatos.appendChild($item);
    head = head.next;
  }
}

renderizeList();

function adicionarEditarContato() {
  const nome = $nome.value;
  const email = $email.value;

  if (!nome || !email) {
    alert("Preencha todos os campos");
    return;
  }

  if (contatoEditando) {
    contatoEditando.nome = nome;
    contatoEditando.email = email;
    contatos.edit(contatoEditando);
    contatoEditando = null;
    $adicionarTitulo.innerText = "Adicionar contato";
    $adicionarEditar.innerText = "Adicionar";
  } else {
    contatos.add(new Contato(nome, email));
  }

  renderizeList();
  $nome.value = "";
  $email.value = "";
}
