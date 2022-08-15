/* AULA 26 - PAR OU IMPAR - MINI PROJETO */

function VerificaParImpar(num){
    if(num % 2 == 0){
        console.log('NÚMERO PAR');
    }
    else{
        console.log('NÚMERO IMPAR');
    }
}
  
function exibeTipo(limite){
    for(let i = 0; i < limite; i++){
        console.log('Número :', i);
        VerificaParImpar(i);
    }
}

exibeTipo(3);