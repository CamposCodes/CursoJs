/* AULA 23 - MAXIMO ENTRE DOIS VALORES - MINI PROJETO */  

function maior(num1 , num2){
    let maior = 0;
    if(num1 > num2){
        maior = num1;
    }
    else{
        maior = num2;
    }

    return maior;
}
   
let valMaior = maior(1,10);
console.log('o valor maior eh:', valMaior);