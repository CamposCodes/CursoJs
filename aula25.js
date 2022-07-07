/* AULA 25 - MEDIDOR DE VELOCIDADE - MINI PROJETO */

// vel max até 70km , a cada 5km acima do limite vc recebe 1 pt na carteira, 
// usar Math.floor(); para arrendondar valor 
// caso os pts sejam maior que 12 a carteira é suspendida


function verificarVelocidade(vel){
    let velMax = 70;
    if(vel <= velMax){
        console.log('velocidade dentro do limite permitido !');
    }
    else{
        const pts = Math.floor((vel - velMax) / 5);
        if(pts >= 12){
            console.log('carteira suspensa !');
        }
        else{
            console.log('você já possui' , pts, 'pontos na sua carteira !');
        }
    }
}

verificarVelocidade(200);