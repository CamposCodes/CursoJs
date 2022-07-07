/* AULA 33 - CONSTRUCTION FUNCTIONS (funções de construção) */

// parece com a construção de fabrica mas de uma forma diferente 
// camelCase = umDoisTresQuatro
//PascalCase = UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){ 
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,   
    this.capacidadeBateria = capacidadeBateria,   
    this.ligar = function(){
        console.log("Fazendo a ligação...");
    }   
}

const celular = new Celular("Azus",5.5,5000);
console.log(celular);

function Notebook(marcaNote,telaNote,hdNote,ssdNote){
    this.marcaNote = marcaNote,
    this.telaNote = telaNote,
    this.hdNote = hdNote,
    this.ssdNote = ssdNote,
    this.carregando = function(){
        console.log("Carregando...");
    }
}

const notebook = new Notebook('Acer',15.5,1000,512);
console.log(notebook);