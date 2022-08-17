/* AULA 54 - COMBINANDO ARRAYS - 'join' e 'split' */

// adicionando 
const numeros = [1,2,3,4,5];
const combinado = numeros.join('.'); //adiciona o item do () a cada item do array
console.log(combinado);

// separando
const frase = 'olá bem vindo ao curso';
const resultado = frase.split(' '); //separa a string de acordo com o item ()
console.log(resultado);

// exercicio 
const x = ['a','b','c','d'];
const y = 'hello world !';
const z = 'toque,respire,olhe,escute,sinta';

const resp1 = x.join('-'); // a cada item adiciona '-'
const resp2 = y.split(' ') //quando acha espaço separa
const resp3 = z.split(',') //quando acha virgula separa

console.log(resp1);
console.log(resp2);
console.log(resp3);