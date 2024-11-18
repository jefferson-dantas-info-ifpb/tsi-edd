const $valor = document.getElementById('valor')
const $pesquisa = document.getElementById('pesquisa')
const $meuArray = document.getElementById('meuArray')
const $resultado = document.getElementById('resultado')
$valor.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    executarPush()
  }
})

let meuArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

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

function executarPush() {
  meuArray.push($valor.value)
  renderizarArray()
  $valor.value = ''
}

function executarPesquisa() {
  let comparacoes = 0
  for (const item of meuArray) {
    comparacoes++
    if (item == $pesquisa.value) {
      $resultado.innerText = `${comparacoes} comparações. Encontrou!`
      return
    }
    $resultado.innerText = `${comparacoes} comparações. Não encontrou!`
  }
}

function executarPesquisaBinaria() {
  let inicioIntervalo = 0
  let fimIntervalo = meuArray.length - 1

  let comparacoes = 0
  while (inicioIntervalo !== fimIntervalo) {
    const meio = Math.floor((fimIntervalo - inicioIntervalo) / 2) + inicioIntervalo

    comparacoes++
    if (meio == $pesquisa.value) {
      $resultado.innerText = `${comparacoes} comparações. Encontrou!`
      return
    }

    if ($pesquisa.value < meuArray[meio]) {
      fimIntervalo = meio - 1
    } else {
      inicioIntervalo = meio + 1
    }

    $resultado.innerText = `${comparacoes} comparações. Não encontrou!`
  }
}

function executarSort() {
  meuArray.sort((a, b) => a - b)
  renderizarArray()
}
