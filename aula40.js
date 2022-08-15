/* AULA 40 - MONTADOR DE ENDEREÇOS - MINI PROJETO */

// Objeto endereço

// Criar um objeto endereço que contem:
// Rua - Cidade - CEP - Exibir endereço

let endereco = {
    rua: 'x',
    cidade: 'xx',
    cep: 'xxx'
};

function exibirEndereco(endereco){
    for(let chave in endereco)
    {
        console.log(chave,endereco[chave]);
    }
}

exibirEndereco();