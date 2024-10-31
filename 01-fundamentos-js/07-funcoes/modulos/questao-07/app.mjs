async function app(exibirMensagem) {
    if (exibirMensagem) {
        const { exibirMensagem } = await import('./mensagem.mjs')
        exibirMensagem("Hello World")
    }
}

app(false)
app(false)
app(true)
app(true)
app(false)
