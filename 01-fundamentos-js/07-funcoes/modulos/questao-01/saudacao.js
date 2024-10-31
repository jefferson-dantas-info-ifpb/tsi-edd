// Criação de Módulo Básico (CommonJS): Crie um módulo em CommonJS chamado saudacao.js que exporta uma função saudar(nome), que recebe um nome e retorna uma saudação (por exemplo, "Olá, {nome}!"). Em seguida, importe esse módulo em outro arquivo e chame a função.

exports.saudar = function saudar(nome) {
    return `Olá, ${nome}!`
}
