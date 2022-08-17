/* AULA 51 - COMBINANDO E CORRTANDO ARRAYS */

const primeiro = [1,2,3];
const segundo = [4,5,6];

// combinar 
const combinando = primeiro.concat(segundo);
console.log(combinando)

// dividir

const dividindo = combinando.slice(3); //copia os valores a partir do (indice) determinado
console.log(dividindo);


console.log("\n");
console.log("\n");
console.log("\n");
// exercicio

const x1 = ['a','b','c','d'];
const x2 = ['e','f','g','h'];

const resp1 = x1.concat(x2);
const resp2 = resp1.slice(3);

console.log(`x1 = [${x1}`);
console.log(`x2 = [${x2}]`);
console.log(`concatenado = [${resp1}]`);
console.log(`dividido  = [${resp2}]`);