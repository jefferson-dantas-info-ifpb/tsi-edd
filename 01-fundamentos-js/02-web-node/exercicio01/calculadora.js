const operacoes = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
}

function calculadora() {
    const n1 = parseFloat(prompt("Digite o primeiro número"))
    const n2 = parseFloat(prompt("Digite o segundo número"))
    const op = prompt("Digite a operação (+ - * /)")

    const resultado = operacoes[op](n1, n2)
    alert("Resultado: " + resultado)
}

calculadora()