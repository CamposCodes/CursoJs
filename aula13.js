/* AULA 13 - OPERADORES LÓGICOS */

// Operador lógico E ( && )
// retorna TRUE se os dois operandos forem true 

let maiorDeIdade = false;
let possuiCNH = true;
let podeAplicar = maiorDeIdade && possuiCNH;

console.log(podeAplicar); // da false pq os 2 n sao true 
  
// Operador lógico OU (||)
// retorna TRUE se um dos dois operandos forem true
    
let maiorDeIdade1 = false;
let possuiCNH1 = true;
let podeAplicar1 = maiorDeIdade || possuiCNH;

console.log(podeAplicar1);// da true pq pelo menos 1 é true 

// Operador lógico NOT (!)
// é a negação = não

let candidatoRecusado = !podeAplicar;
console.log(candidatoRecusado)

candidatoRecusado = !podeAplicar1;
console.log(candidatoRecusado)