/* AULA 16 - IF & ELSE */

// 2 tipos de condicionais : if...else - switch...case

//exercicio: se a hora estiver entre 06:00 até 12:00 = exibir 'bom dia!'
//              se estiver entre 12:00 e 18:00 = exibir 'boa tarde!' 
//              caso contrario, exibir 'boa noite'

let hora = 17;

if(hora > 6 && hora < 12 ){
    console.log("Bom dia !");
}
else if(hora > 12 && hora < 18){
    console.log("Boa tarde !");
}
else{
    console.log("Boa noite !");
}

