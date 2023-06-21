// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    // Sua implementação aqui
    const numeros=[1,2,3,4]
    const dobro=numeros.map(numeros=>numeros*2)
}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    // Sua implementação aqui
    const num=[1,2,3,4];
    let soma=0;
    
    for(let i=0;i<num.length;i++){
      soma +=num[i];
    }
}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    // Sua implementação aqui
    let numerosPares = [];
    for (let i = 0; numerosPares.length < numeros; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    
    return numerosPares;
}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};