const readline = require('node:readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question('Digite o primeiro número: ', (n1) => {
    rl.question('Digite o segundo número: ', (n2) => {
        rl.question('Digite a operação (+ - * /): ', (op) => {
            rl.close()
            switch (op) {
                case '+': console.log('Resultado:', Number(n1) + Number(n2)); break
                case '-': console.log('Resultado:', Number(n1) - Number(n2)); break
                case '*': console.log('Resultado:', Number(n1) * Number(n2)); break
                case '/': console.log('Resultado:', Number(n1) / Number(n2)); break
            }
        })
    })
})
