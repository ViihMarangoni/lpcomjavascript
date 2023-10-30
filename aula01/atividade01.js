console.log("Lógica de Programação")
console.log("com Javascript")

// variável
/*
3 formas de declarar uma variável
    1ª sem declarar
    2ª utilizando var
    *** 3ª utilizando let
*/
// 1ª sem declarar
nome = "Victoria"

// 2ª utilizando var
var idade = 19

// 3ª utilizando let
let email = "victoria.marangoni@senac.edu.br"

console.log(nome, idade, email)

// constante
const escola = "Senac Americana"
// escola = "Senac Piracicaba" // constante, eu dou um "valor" a ela e nunca mais pode ser mudado, por exemplo, não posso mudar a escrita "Senac Piracicaba"
console.log(escola)

// Tipos de dados
/*
String - texto
Number - int. float
Boolean - True / False
function, undefined, null, object, symbol
*/

console.log("NOME => " + typeof nome) // typeof serve para mostrar o tipo da variável
console.log("IDADE => " + typeof idade)
console.log("EMAIL = > " + typeof email)
console.log("ESCOLA = > " + typeof escola)

nome = "Victória"
let sobrenome = "Marangoni"

console.log("Nome completo: " + nome + " " + sobrenome)