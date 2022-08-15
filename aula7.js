/* AULA 07 - FUCTIONS (funções) */
// é um outro - tipo de refrencia -

// nomeando uma função = VERBO + SUBSTANTIVO 

let corSite = "azul";

function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("verde", "claro");
console.log(corSite);
  
let meuNome = 'Gabriel';

function adicionaSobrenome(sobrenome){
    meuNome = meuNome + ' ' + sobrenome;
};

console.log(meuNome);
adicionaSobrenome('Campos');
console.log(meuNome);
adicionaSobrenome('Lima');
console.log(meuNome);
adicionaSobrenome('Alves');
console.log(meuNome);
