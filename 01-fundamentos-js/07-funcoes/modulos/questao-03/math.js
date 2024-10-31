// Exportação e Importação de Vários Itens (CommonJS): Crie um módulo CommonJS chamado math.js que exporta duas funções: somar(a, b) e multiplicar(a, b). Importe o módulo em outro arquivo e use ambas as funções.

exports.somar = function somar(a, b) {
    return a + b
}

exports.multiplicar = function multiplicar(a, b) {
    return a * b
}
