/* AULA 31 - CONTADOR DE NÚMEROS PRIMOS - MINI PROJETO */ 

function exibirNumerosPrimos(limite){
    for(let numero = 2 ; numero <= limite; numero++){
        if(ehPrimo(numero)){
            console.log(numero);
        }
    }
}
  
function ehPrimo(numero){

    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor == 0){
            return false;
        }
    }
    return true;
}


exibirNumerosPrimos(15);