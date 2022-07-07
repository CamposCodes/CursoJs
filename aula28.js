/* AULA 28 - MULTIPLOS DE 3 E 5 - MINI PROJETO */

// criar uma função que retorna a soma de todos os numeros que multiplos de 3 e 5 

// multiplos de 3 = 3,6,9
// multiplos de 5 = 5,10

function somar(limite){
    let somaM3 = 0;
    let somaM5 = 0;
    let resultado = 0;
    
    for(let i = 0; i <= limite; i++)
    {
        if( i % 3 == 0){
            somaM3 += i;
        }  
        if( i % 5 == 0){
            somaM5 += i;
        }
    }
    resultado = somaM3 + somaM5;
    console.log('a soma eh: ', resultado);
}

somar(10);

