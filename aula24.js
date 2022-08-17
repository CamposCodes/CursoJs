/* AULA 24 - FIZZBUZZ - MINI PROJETO */
 
// valor divisivel por 3 --> Fizz
// valor divisivel por 5 --> Buzz
// se não for divisivel por 3 ou 5 --> retorna o proprio num
// se passar algo que não é numero --> retorna mensagem que não é um numero 

  
function fizzBuzz(num){
    if(typeof num == 'number'){
        if(num % 3 == 0 && num % 5 == 0){
            return 'FizzBuzz';
        }
        if(num % 3 == 0){
            return 'Fizz';
        }
        if(num % 5 == 0){
            return 'Buzz';
        }
        else{
            return num;
        }
    }
    else{
        return 'NÃO É UM NÚMERO !';
    }
}

const resultado = fizzBuzz(15);
console.log(resultado); 

