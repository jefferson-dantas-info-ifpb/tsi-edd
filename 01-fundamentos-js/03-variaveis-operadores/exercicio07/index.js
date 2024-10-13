const salarioMensal = Number(prompt("Digite o seu salário mensal"))
const mesesTrabalhados = Number(prompt("Digite o número de meses trabalhados neste ano"))

const salarioTotal = salarioMensal * mesesTrabalhados

const { format } = Intl.NumberFormat("pt-BR", {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
})

console.log("O seu salário é de", format(salarioTotal))
