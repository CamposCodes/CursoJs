/* AULA 21 - LAÇO/LOOP/FOR...IN */

// 4. for...in

const pessoa = {
    nome: 'Gabriel',
    idade: 25
};
  
//(key-value)
for(let chave in pessoa){
    console.log(chave, pessoa['nome']); // ou pessoa.nome
}

const cores = [ 'vermelho','Azul','verde'];

for(let indice in cores){
    console.log(indice,cores[indice])
}