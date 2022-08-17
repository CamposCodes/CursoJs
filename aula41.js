/* AULA 41 - IGUALDADE DE OBJETOS - MINI PROJETO/EXERCÍCIO */
  
function endereco(rua,cidade,cep){
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep
}

const endereco1 = new endereco('a','b','c');
const endereco2 = new endereco('a','b','d');
const endereco3 = new endereco('a','b','c');
const endereco4 = endereco1;

function saoIguais(endereco1, endereco2){
    if(endereco1.rua == endereco2.rua && endereco1.cidade == endereco2.cidade && endereco1.cep == endereco2.cep){
        return true;
    }
    else{
        return false;
    }
}

console.log(saoIguais(endereco1,endereco2));
console.log(saoIguais(endereco1,endereco3));

function temEnderecoMemoriaIguais(endereco1,endereco2){
    if(endereco1 === endereco2){
        return true;
    }
    else{
        return false;
    }
}

console.log(temEnderecoMemoriaIguais(endereco1,endereco2));
console.log(temEnderecoMemoriaIguais(endereco1,endereco3));
console.log(temEnderecoMemoriaIguais(endereco1,endereco4));
