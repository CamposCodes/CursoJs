/* AULA 27 - ENCONTRE A STRING - MINI PROJETO */ 

// criar um metodo para ler propriedades de um objeto e
// exibir somente as propriedades que forem string 
   
const filme = {
    titulo: 'Os Vingadores' ,
    ano: 2018 ,
    diretor: 'Robin' ,
    personagem: 'Homem de Ferro'
};

function exibirPropriedade(objeto){
    for(prop in objeto)
    if(typeof objeto[prop] === 'string'){
        console.log(prop, ' : ',objeto[prop]);
    }
}

exibirPropriedade(filme);