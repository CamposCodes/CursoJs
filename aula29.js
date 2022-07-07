/* AULA 29 - MEDIA DE NOTAS ESCOLARES - MINI PROJETO */

// exercicios notas escolares 
// obtenha a media de notas a partir de uma array 

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [90,90,100]; // m: 75

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    let media = 0;
    let soma = 0;
    for( let nota of notas){
        soma += nota;
    }
    media = soma / 3;
    
    if(media >= 0 && media < 60){
        console.log('Sua nota final eh: F');
    }
    else if(media > 59 && media < 70){
        console.log('Sua nota final eh: D');
    }
    else if(media > 79 && media < 80){
        console.log('Sua nota final eh: C');
    }
    else if(media > 79 && media < 90){
        console.log('Sua nota final eh: B');
    }
    else if(media > 89 && media <= 100){
        console.log('Sua nota final eh: A');
    }

}
