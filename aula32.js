/* AULA 32 - FACTORY FUNCTIONS ( FUNÇÕES DE FÁBRICA ) */ 


function criaCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return{
        marcaCelular, // pode ser agilizado dessa forma tbm ! qnd tem o mesmo nome
        tamanhoTela: tamanhoTela,
        capacidadeBateria:capacidadeBateria,
        ligar(){
            console.log("Fazendo a ligação...");
        }
    }
}
   
const celular1 = criaCelular('Zenfone',5.5,5000);
console.log(celular1);

//const notebook = {
//    marcaNote,
//    processador,
//    telaNote,
//    memoriaRam,
//    memoriaSsd
//};

function criaNotebook(marcaNote, processador, telaNote, memoriaRam, memoriaSsd){
    return{
        marcaNote,
        processador,
        telaNote,
        memoriaRam,
        memoriaSsd,
        carregar(){
            console.log("Carregando...");
        }
    }
}

const notebook1 = criaNotebook('Acer','i7 11 ger.', 15, 8, 512);
console.log(notebook1);