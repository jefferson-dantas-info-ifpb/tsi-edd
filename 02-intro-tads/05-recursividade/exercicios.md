## Crie uma função recursiva para obter a multiplicação a partir de operações de soma
```js
function multiplicacao(n1, n2) {
    if (n2 === 1) return n1
    return multiplicacao(n1, n2 - 1) + n1
}
```

## Crie uma função recursiva para obter a exponenciação a partir de operações de multiplicação
```js
function exponenciacao(n1, n2) {
    if (n2 === 1) return n1
    return multiplicacao(
        exponenciacao(n1, n2 - 1),
        n1
    )
}
```

## Crie um programa utilizando uma função para calcular a quantidade nascimentos de coelhos, de acordo com a sequência de fibonacci, após 12 meses.
```js
const memo = []
function fibonacci(mes) {
    if (mes === 0 || mes === 1) return mes

    if (memo[mes]) {
        return memo[mes]
    } else {
        return fibonacci(mes - 1) + fibonacci(mes - 2)
    }
}
const resultado = fibonacci(12)
console.log(resultado)
```
