const array = [2, 4, 3, 1, 6, 7, 9];
const pares = array.filter((item) => item % 2 === 0);
console.log(pares);


// pares.js

// Alterando 'var' para 'let' e melhorando os nomes das variáveis
let numero1 = 10;
let numero2 = 20;

// Função para verificar se um número é par
function ehPar(numero) {
    return numero % 2 === 0;
}

// Verificando se os números são pares ou ímpares
if (ehPar(numero1)) {
    console.info(`${numero1} é par.`);
} else {
    console.info(`${numero1} é ímpar.`);
}

if (ehPar(numero2)) {
    console.info(`${numero2} é par.`);
} else {
    console.info(`${numero2} é ímpar.`);
}
