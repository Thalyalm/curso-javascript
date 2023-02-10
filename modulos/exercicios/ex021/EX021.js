let valores = [0, 1, 2, 3]

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
*/

/*
for(let posicao=0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}
*/

for(let posicao in valores) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}