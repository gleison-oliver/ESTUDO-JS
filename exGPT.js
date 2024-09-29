// independente da quantidade de nomes ou numero, etc... o ultimo numero sempre serar representado por 
// [arrey1.length - 1] porque o -1 sempre indica o ultimo numero ou nome.

// Exercício 1: Tamanho do array
// Crie um programa que declare um array de 5 números e imprima o tamanho desse array.

const arrey5 = [0, 1, 2, 3, 4]

console.log(`O arrey contem o tamanho de: ${ arrey5.length}`);

const arrey1 = [`João`, `Teresa`, `Bastião`, `Margarete`, `Juraci`, `Nedina`]

console.log(`O primeiro nome é: ${arrey1[0]}`)

console.log(`Último nome: ${arrey1[arrey1.length - 1]}`);

//Exercício 2: Acessar elementos de um array
// Dado um array de nomes, crie um programa que imprima o primeiro e o último nome do array.

let nomes = [`Marcos`, `Tadeu`, `Manuel`, `Francisco`]

console.log(`O primeiro numero é: ${nomes[0]}, ja o ultimo nome é: ${nomes[nomes.length - 1]}`)


//Exercício 3: Adicionar elementos ao array
//Crie um array com algumas frutas e adicione mais uma fruta ao final. Exiba o array atualizado.

let frutas = [`Maçan`, `Banana`, `Mamão`]

frutas.push(`Laranja`)

console.log(frutas)

//Exercício 4: Verificar se um número é par ou ímpar
//Crie um programa que receba um número e verifique se ele é par ou ímpar, exibindo a resposta.

let numero = 8;

if (numero % 2 === 0) {
console.log( `${numero} é par.`);

} else {
    console.log(`${numero} é impar.`);
}


//Exercício 6: Encontrar o maior número
// Dado um array de números, crie um programa que encontre e imprima o maior número.
let numeros = [5, 10, 15, 20];
let soma = 0;

for (let i = 0; i < numeros.length; i ++) {
    soma += numeros[i];
}

console.log(`A soma dos numeros é: ${soma}`);

// Exercício 7: Verificar presença de elemento no array
// Dado um array de cores, crie um programa que verifique se uma cor específica está no array.


let cores = [`Vermelho`, `Azul`, `Verde`, `Amarelo`];
let corProcurada = `Azul`;

if (cores.includes(corProcurada)) {
    console.log(`A cor ${corProcurada} esta no array.`);
} else {
    console.log(`A cor ${corProcurada} não esta no arrey.`);
}

// Exercício 8: Remover o último elemento de um array
//Crie um programa que remova o último elemento de um array e exiba o array atualizado.

let frutas5 = [`Banana`, `Melão`, `Jaca`, `Abacate`];

frutas5.pop();

console.log(frutas5);