const $valor = document.getElementById('valor')
const $meuArray = document.getElementById('meuArray')
$valor.addEventListener('keydown', valorKeydown)

let meuArray = [1, 2, 3, 4, 5, 6]

function criarItem(texto) {
  const $arrayItem = document.createElement('div')
  $arrayItem.className =
    'item w-[100px] h-[100px] bg-slate-400 min-w-10 text-center shadow-md rounded p-1 flex items-center justify-center break-all overflow-hidden'
  $arrayItem.innerText = texto
  return $arrayItem
}

function renderizarArray() {
  $meuArray.innerHTML = ''
  for (let i = 0; i < meuArray.length; i++) {
    $meuArray.appendChild(criarItem(meuArray[i]))
  }
}

renderizarArray()

function valorKeydown(e) {
  if (e.key === 'Enter') {
    meuArray.push(+e.target.value)
    renderizarArray()
    e.target.value = ''
  }
}

function executarSort() {
  meuArray.sort()
  renderizarArray()
}

function executarFilter() {
  meuArray = meuArray.filter((item) => item > 2)
  renderizarArray()
}

function executarMap() {
  meuArray = meuArray.filter((item) => item * 2)
  renderizarArray()
}

function executarFind() {
  const resultado = meuArray.find((item) => item > 10)
  if (resultado === undefined) {
    alert('Não encontrado')
  } else {
    alert(resultado)
  }
}

function executarReduce() {
  const resultado = meuArray.reduce((acc, item) => acc + item, 0)
  alert(resultado)
}
