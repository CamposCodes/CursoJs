/* AULA 48 - ARROW FUNCTIONS - FUNÇÕES DE SETA */
  
const marcas = [
    {id:1,nome:'a'},
    {id:2,nome:'b'}
];

//em vez disso podemos simplificar usando arrow function

const marcax = marcas.find(function(marca){
    return marca.nome === 'a';
});


const marca = marcas.find((marca) => {
    return marca.nome === 'a';
});
console.log(marca);

//simplificando ainda mais

const marca2 = marcas.find(marca => marca.nome === 'a');
console.log(marca2);


// exercicio

const skate = [
    {size: 8.0, marca: 'element'},
    {size: 7.0, marca: 'milk'},
]

console.log(skate.find((skate) => skate.marca === 'milk'));

const skt = skate.find((skate) => skate.marca === 'element');
console.log(skt);