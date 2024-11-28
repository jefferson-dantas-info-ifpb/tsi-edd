const $valor = document.getElementById("valor")
const $meuArray = document.getElementById("meuArray")

let meuArray = [1, 2, 3, 4, 5, 6]

function criarItem(texto) {
  const $arrayItem = document.createElement('div')
  $arrayItem.className =
    'item w-[100px] h-[100px] bg-slate-400 min-w-10 text-center shadow-md rounded p-1 flex items-center justify-center break-all overflow-hidden'
  $arrayItem.innerText = texto
  return $arrayItem
}

function renderizarArray() {
  $meuArray.innerHTML = ""
  for (let i = 0; i < meuArray.length; i++) {
    $meuArray.appendChild(criarItem(meuArray[i]))
  }
}

renderizarArray()

function push(valor) {
  meuArray[meuArray.length] = valor
}

function unshift(valor) {
  for (let i = meuArray.length - 1; i > 0; i--) {
    meuArray[i + 1] = meuArray[i]
  }

  meuArray[0] = valor
}

function shift() {
  meuArray.splice(0, 1)
}

function pop() {
  meuArray.splice(meuArray.length - 1, 1)
}

function executarPush() {
  push($valor.value)
  renderizarArray()
}

function executarUnshift() {
  unshift($valor.value)
  renderizarArray()
}

function executarShift() {
  shift()
  renderizarArray()
}

function executarPop() {
  pop()
  renderizarArray()
}
