/* AULA 44 - FAIXA DE PREÇO - MINI PROJETO/EXERCÍCIO */

//1ª op ==> aray de objetos

let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 até R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999}
];

console.log(faixas);

//2ª op ==> factory function

function criaFaixaPreco(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('a',100,1000),
    criaFaixaPreco('a',1000,1000000),
];

console.log(faixas2);

// 3ª op ==> constructor function

function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip= tooltip,
    this.minimo= minimo,
    this.maximo= maximo
}

let faixas3 = [
    new FaixaPreco('x', 10,20),
    new FaixaPreco('xx', 20,40),
    new FaixaPreco('xxx', 100,2000)
];

console.log(faixas3);