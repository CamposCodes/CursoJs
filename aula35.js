/* AULA 35 - CLONANDO OBJETOS */
 
const celular = {
    marcaCelular: 'Azus',
    tamanhoTela:{
        vertical: 155,
        horizontal: 7,
    },
    ligar: function(){
        console.log("Ligando...");
    }
}
   
/* FORMAS DE CLONAR OBJETO:

1.( Object.assign({novos-atributos-para-objetoClone},objeto-que-quer-clonar)) */

const celular1 = Object.assign({
    bateria: 5000,
    modelo: 'T'
},celular);

console.log(celular1);

/*
2. {...Objeto-que-quer-clonar} */

const celular2 = {...celular};
console.log(celular2);


//

const notebook={
    marcaNote: 'Acer',
    telanote: 15.5,
    ssdNote: 512,
    carregando: function(){
        console.log("Carregando...");
    }

}

const note1 = Object.assign({
    processador: 'i7'
},notebook);

const note2 = {...notebook};

console.log(note1, note2);

