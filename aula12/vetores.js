let valores = [8, 2, 1, 4, 7, 9]

for (let pos= 0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

 // Maneira simplificada

for(let pos in valores) {
    console.log (`a posição ${pos} tem o valor ${valores[pos]}`)
}