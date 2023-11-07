//  Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
console.log("Escreva um número de 1 ao 7 para ser exibido um dia da semana: ")

let dia_semana = 4

if(dia_semana == 1){
    console.log("Domingo")
}else if(dia_semana == 2){
    console.log("Segunda-Feira")
}else if(dia_semana == 3){
    console.log("Terça-Feira")
}else if(dia_semana == 4){
    console.log("Quarta-Feira")
}else if(dia_semana == 5){
    console.log("Quinta-Feira")
}else if(dia_semana == 6){
    console.log("Sexta-Feira")
}else if(dia_semana == 7){
    console.log("Sábado")
}else{
    console.log("Opção Inválida")
}
