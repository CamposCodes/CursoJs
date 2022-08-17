/* AULA 56 - SEGURANÇA VIRTUAL - MINI PROJETO */

let nome__input= document.querySelector("#name__input");
let guest__input = document.querySelector("#guest__input");
let check__button = document.querySelector("#check__button");
let search = document.querySelector("#search");

const listLucas = ['Gabriel','Leticia','Henrique','Berenice','Rogerio'];
const listJao = ['Gabriel','Leticia','Henrique','Berenice','Rogerio'];

check__button.addEventListener("click", () => {
    
    let guest = guest__input.value;
    let nome = nome__input.value;

    if(guest == 'Jao'){
        if(listJao.includes(nome)){
            search.textContent = 'Entrada Permitida !';
        }
        else{
            search.textContent = 'Entrada Negada !';
        }
    }
    else if(guest == 'Lucas'){
        if(listLucas.includes(nome)){
            search.textContent = 'Entrada Permitida !';
        }
        else{
            search.textContent = 'Entrada Negada !';
        }
    }
    else{
        alert("O anfitrião não existe !");
    }
});  