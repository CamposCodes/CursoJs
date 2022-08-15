/* AULA 37 - STRING */

// 2 Tipos de string:

// Tipo Primitivo:
const mensagem1 = ' Essa é a minha primeira mensagem ';

// Tipo Objeto:
const mensagem2 = new String('Bom Dia!');

// + propriedades com strings

// tamanho: length

mensagem2.length;

// acessa 1 letra

mensagem1[2];

// pesquisar na string

mensagem1.includes('primeira');
mensagem1.includes('vermelho');

// se a string inicia com 

mensagem1.startsWith('Essa');
mensagem1.startsWith('verde');

// se a string termina com

mensagem2.endsWith('dia');
mensagem2.endsWith('azul');

// qual o indice da palavra dentro da string

mensagem1.indexOf('primeira');

// substitui o primeiro valor pela mensagem

mensagem1.replace('minha', 'sua');

//tira os espaços excedentes das laterais
 
mensagem1.trim();

//repartir a string (onde tem espaço)

mensagem2.split(' ');
mensagem1.split(' ');
