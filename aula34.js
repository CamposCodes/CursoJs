/* AULA 34 - NATUREZA DINÂMICA DE OBJETOS  */
// você pode adicionar e deletar propriedades de um objeto que já foi criado !

const mouse = {
    cor: 'red',
    marca: 'Razer'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function (){
    console.log("Trocando DPI...");
}
   
//delete mouse.velocidade;
delete mouse.trocarDPI
console.log(mouse);
