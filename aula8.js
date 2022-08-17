/* AULA 08 - DIFERENTES TIPOS DE FUNÇÕES */  

// existem 2 tipos de função :
// 1 - realiza tarefa mas não retorna nada 
function dizerNome(){
    console.log('Gabriel');
}
dizerNome();

//2 - faz uma operação/tarefa e retorna algo 
function dobraValor(valor){
    return valor*2;
}
  
let resultado = dobraValor(5);
console.log(resultado);