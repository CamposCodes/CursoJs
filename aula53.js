/* AULA 53 - 'forEach' */
//iterando(percorrendo o array)
  
const numeros = [1,2,3,4,5];

// outro metodo para isso:
// for(let numero of numeros){
//     console.log(numero);
// }

numeros.forEach((numero, i) => {
    console.log(`numero: ${numero} -  indice: ${i}`);
});

// exercicio 

const resp = ['a','b','c','d'];
resp.forEach((element, index) => {
    console.log(`elemento: ${element} -  indice: ${index}`);
});