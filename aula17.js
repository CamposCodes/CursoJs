/* AULA 17 - SWITCH... CASE */  

let permissao; // comum - gerente - diretor 

//permissao = 'comum';
//permissao = 'gerente';
//permissao = 'diretor';
permissao = 'erro';
  


switch(permissao)
{
    case 'comum':
        console.log('usuário comum');
        break;
    case 'gerente':
        console.log('usuário gerente');
        break;
    case 'diretor':
        console.log('usuário diretor');
        break;
    default:
        console.log('usuário não reconhecido !');
}