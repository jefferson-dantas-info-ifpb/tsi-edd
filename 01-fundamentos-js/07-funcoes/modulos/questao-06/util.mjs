// Criando um Módulo Utilitário com Várias Funções (ESM) Crie um módulo util.mjs que exporta múltiplas funções úteis (somaArray, maiorValor, menorValor). Importe todas as funções no app.mjs usando import * as util.

export function somaArray(array) {
    let resultado = 0
    for (const item of array) {
        resultado += item
    }
    return resultado
}

export function maiorValor(lista) {
    let maior = -Infinity
    for (const item of lista) {
        if (item > maior) {
            maior = item
        }
    }
    return maior
}

export function menorValor(lista) {
    let menor = Infinity
    for (const item of lista) {
        if (item < menor) {
            menor = item
        }
    }
    return menor
}
