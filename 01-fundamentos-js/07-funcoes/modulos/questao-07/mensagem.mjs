// Importação Dinâmica com ESM No app.mjs, use import() para importar dinamicamente um módulo mensagem.mjs que exporta uma função exibirMensagem. A função deve ser importada e chamada quando uma condição (ex.: uma variável carregarMensagem) for true.

console.log("Importado!")

export function exibirMensagem(mensagem) {
    console.log(mensagem)
}
