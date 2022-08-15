/* AULA 30 - CONTADOR DE ASTERISTICOS */

function exibirAsteriscos(linhas){
    let padrao = '';
    for( let i = 0; i <= linhas; i++){
        padrao += '*';
        console.log(padrao);
    }
}
    
exibirAsteriscos(5);