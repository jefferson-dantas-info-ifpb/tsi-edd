function calcular(event) {
    event.preventDefault()
    const n1 = Number(event.target.n1.value)
    const n2 = Number(event.target.n2.value)
    const op = event.target.op.value
    let resultado
    switch (op) {
        case '+': resultado = n1 + n2; break
        case '-': resultado = n1 - n2; break
        case '*': resultado = n1 * n2; break
        case '/': resultado = n1 / n2; break
    }
    document.getElementById('resultado').innerText = resultado
}

document.getElementById('calculadoraForm').addEventListener('submit', calcular)