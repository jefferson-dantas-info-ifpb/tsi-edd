const raio = Number(prompt("Digite o raio do círculo"))

const perimetro = 2 * Math.PI * raio
const area = Math.PI * raio ** 2

console.log(`O perímetro do círculo cujo raio é ${raio} é ${Math.round(perimetro)}`)
console.log(`A área do círculo cujo raio é ${raio} é ${Math.round(area)}`)
