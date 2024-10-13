const booleanoString1 = prompt("Digite um booleano (true/false)").trim().toLowerCase()
const booleanoString2 = prompt("Digite outro booleano (true/false)").trim().toLowerCase()

const booleanos = {
    true: true,
    false: false
}

const booleano1 = booleanos[booleanoString1]
const booleano2 = booleanos[booleanoString2]
if (booleano1 === undefined || booleano2 === undefined) {
    throw new Error('Booleano inválido')
}

console.log(`${booleano1} AND ${booleano2} =`, booleano1 && booleano2)
console.log(`${booleano1} OR ${booleano2} =`, booleano1 || booleano2)
console.log(`NOT ${booleano1} =`, !booleano1)
console.log(`NOT ${booleano2} =`, !booleano2)
