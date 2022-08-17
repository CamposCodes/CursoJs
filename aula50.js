/* AULA 50 - ESVAZIANDO UM ARRAY */

const numeros = [1,2,3,4,5,6];
let numerosX = [1,2,3,4,5,6];
let referencia = numerosX;

// 1ª opção

// numerosX = [] //não funciona com const(só com let)
// console.log(referencia); // tal opção não apaga as referencias do array

// 2ª opção (apaga todas as referencias) 'melhor metodo'

numerosX.length = 0;
console.log(numerosX);
console.log(referencia);

// 3ª opção 

//numerosX.splice(0,numeros.length);
//console.log(numerosX);
//console.log(referencia);

// 4ª opção (menos performatica)

//while(numeros.length > 0){
//    numeros.pop();
//}

// exercicio

const skates = ['a','b','c','d'];
console.log(`skates : ${skates}`);
skates.length = 0;
console.log(`skates : ${skates}`);