const $form = document.getElementById('formulario')
$form.addEventListener('submit', formularioEnviado)

function formularioEnviado(e) {
    e.preventDefault()
    const nome = e.target.nome.value
    const idade = e.target.idade.value
    $form.innerHTML = `
      <h1>Bem-vindo ${nome}</h1>
      <p>Você tem ${idade} anos!</p>
    `
}