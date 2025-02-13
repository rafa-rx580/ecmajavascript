/*
0 - Domingo
1 - Segunda 
2 - Terça
3 - Quarta 
4 - Quinta
5 - Sexta
6 - Sábado
*/

var agora = new Date();
var dia = agora.getDay();
var ano = agora.getFullYear();
var hora = agora.getHours();
switch(dia){
    case 0 : 
        console.log('Domingo')
        break
        
    case 1 : 
        console.log('Segunda-Feira')
        break

    case 2 : 
        console.log('Terça-feira')
        break

    case 3 : 
        console.log('Quarta-feira')
        break

    case 4 : 
        console.log('Quinta-feira')
        break

    case 5 : 
        console.log('Sexta-feira')
        break

    case 6 : 
        console.log('Sábado')
        break


    default :
        console.log ('ERRO: DIA INVÁLIDO')
        break
    }

    console.log(`São ${hora} horas do ano de ${ano}!`)