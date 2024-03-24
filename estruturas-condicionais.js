const idade = 70

/**
if (idade >= 18) {
    console.log("A pessoa é maior de idade")
} else {
    console.log("A pessoa é menor de idade")
}
*/


if (idade < 18) {
    console.log("A pessoa é menor de idade")
} else if (idade >= 18 && idade < 65) {
    console.log("A pessoa é adulta")
} else {
    console.log("A pessoa é idosa")
}

let salario = 2000

if (salario > 1500 || idade < 18) {
    console.log("Condição verdadeira")
}

console.log(idade > 18)
console.log(idade > 18 && salario > 1000)
console.log(idade < 18 && salario > 1000)
console.log(idade < 18 || salario > 1500)