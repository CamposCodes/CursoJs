/* AULA 46 - ENCONTRAR ELEMENTOS(tipos primitivos) DE UM ARRAY */

const numeros = [1,2,3,4,1,4,1];

let teste = numeros.indexOf(3); //busca o valor do () no array e retorna o indice dele no array se encontrado
let teste2 = numeros.indexOf(5);

console.log(teste);
console.log(teste2);

let teste3 = numeros.lastIndexOf(1); //busca a ultima ocorrencia do numero no () dentro do array

// para buscar um numero - saber se ele está incluido no array:

console.log(numeros.includes(2));
console.log(numeros.includes(6));


// exercicio

const vogais = ['a','e','i','o','u','a'];

exTeste1 = vogais.indexOf('i');
exTeste2 = vogais.lastIndexOf('a');
exTeste3 = vogais.includes('e');
exTeste4 = vogais.includes('z');

console.log(exTeste1);
console.log(exTeste2);
console.log(exTeste3);
console.log(exTeste4);