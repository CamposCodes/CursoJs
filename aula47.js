/* AULA 47 - ENCONTRAR ELEMENTOS(tipos referencia) DE UM ARRAY */

const marcas = [
    {id:1,nome:'a'},
    {id:2,nome:'b'}
];

// como é objeto temos refrencias diferentes 
// para encontrar elementos em objetos usamos o 'find'

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca);

//exercicio

const skate = [
    {size: 8.0, marca: 'element'},
    {size: 7.0, marca: 'milk'},
]

const skt = skate.find(function(skate){
    return skate.marca === 'milk';
});

console.log(skt);