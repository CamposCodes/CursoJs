/* AULA 49 - REMOVER ELEMENTOS DE UM ARRAY */

const numeros = [1,2,3,4,5,6];
numeros.push();
numeros.unshift();
numeros.splice();

// remover do final 

const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

// remove inicio 

const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

// remove no meio 

const meio = numeros.splice(2,1);// (indice que remove, quantidade de itens)
console.log(meio);
console.log(numeros);

// exercicio

const tshitSizes = ['P','M','G','GG','XGG'];

const sizeFinal = tshitSizes.pop();
console.log(sizeFinal);
console.log(tshitSizes);

const sizeInitial = tshitSizes.shift();
console.log(sizeInitial);
console.log(tshitSizes);

const sizeMid = tshitSizes.splice(1,1); 
console.log(sizeMid);
console.log(tshitSizes);
