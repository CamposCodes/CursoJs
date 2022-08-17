/* AULA 52 - OPERADOR SPREAD ('...') */
  
const primeiro = [1,2,3];
const segundo = [4,5,6];

// combinando com spread
const combinando = [...primeiro,...segundo];
// clonando com spread
const clone = [...combinando];

console.log(`primeiro = [${primeiro}]`);
console.log(`segundo = [${segundo}]`);
console.log(`concatenado = [${combinando}]`);
console.log(`clonado = [${clone}]`);

// exercicio
    // gerar de saida 1,2,3,'%',4,5,6

const resp = [...primeiro,'%',...segundo];
console.log(resp);


