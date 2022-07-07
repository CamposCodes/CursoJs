/* AULA 14 - COMPARAÇÕES NÃO BOLEANOS */

// # Falsy 
//undefined
//null
//0
//false
// ''
//NaN - not a number

// # Truthy
//qualquer valor que não se encaixe em FALSY

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPadrao || corPersonalizada;

console.log(corPerfil);