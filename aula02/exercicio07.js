// Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

let turno = "m"
if(turno == "m"){
    console.log("Bom Dia!")
}else if(turno == "v"){
    console.log("Boa Tarde")
}else if(turno == "n"){
    console.log("Boa Noite!")
}else{
    console.log("Valor Inválido")
}