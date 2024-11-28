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

function executarPush() {
  meuArray.push($valor.value)
  renderizarArray()
}

function executarUnshift() {
  meuArray.unshift($valor.value)
  renderizarArray()
}

function executarShift() {
  meuArray.shift()
  renderizarArray()
}

function executarPop() {
  meuArray.pop()
  renderizarArray()
}
