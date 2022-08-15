/* AULA 39 - DATE */

const data1 = new Date(); 
const data2 = new Date('March 06 2022 09:30'); 
const data3 = new Date(2022,00,06,9,30);

// metodos para extrair informação
data3.getDay();
data3.getFullYear();
data3.getMonth();
// metodos para alterar informação 
data3.setFullYear(3033);

// converte para string
data3.toDateString();

// zona temporal - gmt - tempo local
data3.toTimeString();

// formato data em banco de dados
data3.toISOString();


//exmp
  
const dataHoje = new Date('Monday August 15 2022 18:00');

dataHoje.toISOString();
dataHoje.toTimeString();
dataHoje.toDateString();
