// ARRAY

const PROFESOR = ["esteban", 1, 9 ,10,11, 30 , "profe"]
PROFESOR.push("messi")

PROFESOR.pop()
// el pop elimina siempre el ultimo elemento


const found = PROFESOR.find((element) => element > 10)

console.log(PROFESOR[6])
console.log(found)

// IMC

function imc(peso,altura){
    return peso/(altura*altura)
}

console.log(imc(84,1.84))

// COMPARACION FUERTE

function comparacion_fuerte(n1,n2){
    return n1 === n2
}

// COMPARACION DEBIL

console.log(comparacion_fuerte(5,"5"))

function comparacion_debil(n1,n2){
    return n1 == n2
}

console.log(comparacion_debil(5,"5"))