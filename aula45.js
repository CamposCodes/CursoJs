/* A PARTIR DAQUI - INTRODUÇÃO A ARRAYS */

// add novos elementos
// encontrar elementos
// remover elementos
// dividir elementos 
// dividir arrays
// combinar arrays

/* AULA 45 - ADICIONAR ELEMENTOS A UM ARRAY */

const numeros = [1,2,3];
console.log(numeros);

//inserir no inicio do array

numeros.unshift(0);
console.log(numeros);

//inserir no meio do array 

numeros.splice(1,0,'a'); //.splice(indice onde vai mexer,se quer deletar,valor a adicionar)
console.log(numeros);

//inserir no final do array 

numeros.push(5);
console.log(numeros);

//exercicio

const alfabeto = ['b','c','e','f','g'];
console.log(alfabeto);

alfabeto.unshift('a');
console.log(alfabeto);

alfabeto.splice(3,0,'d');
console.log(alfabeto);

alfabeto.push('h');
alfabeto.push('i');
console.log(alfabeto);