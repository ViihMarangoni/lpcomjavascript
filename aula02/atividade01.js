// Estruturas de decisão
/*
if --> se
if(condição){
    resposta verdadeira
}

if...else --> se...senao
if(condição){
    resposta verdadeira
}else{
    resposta falsa
}
*/
let idade = 19
if(idade >= 18){
    console.log("Maior de idade") // TRUE
}else{
    console.log("Menor de idade") // FALSE
}

console.log("Escolha o suco:\n1 - Laranja\n2 - Uva\n3 - Abacaxi")

let suco = 2
if(suco == 1){
    console.log("🍊")
}else if(suco == 2){
    console.log("🍇")
}else if(suco == 3){
    console.log("🍍")
}else{
    console.log("Opção Inválida")
}

switch (suco) {
    case 1:
        console.log("🍊")
        break
    case 2:
        console.log("🍇")
        break
    case 3:
        console.log("🍍")
        break
    default:
        console.log("Opção Inválida")
        break
}