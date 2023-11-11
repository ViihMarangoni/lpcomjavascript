/*
OPERADORES ARITMÉTICOS
+ --> adição ou concatenação
- * / 
% --> módulo, pega o resto da divisão
** --> exponenciação
++ --> incrementar 1 / aumenta +1
-- --> decrementar / diminui -1
*/

let i = 0
console.log(i)
i++ //i = i + 1
console.log(i)

/*
OPERADORES RELACIONAIS
== --> igual
!= --> diferente
> < >= <=
*/

/*
OPERADORES LÓGICOS
&& --> E = união de dois if
|| --> OU
! --> NÃO
*/

let usuario = "guto", senha = 123
// u: admin s: 123

if(usuario == "admin" && senha == 123){
    console.log("pode entrar")
}else{
    console.log("Usuário ou senha inválido")
}

let a = 60, b = 110, c = 50

if (a > b && a > c){
    console.log("A é maior")
}else if(b > a && b > c){
    console.log("B é maior")
}else if(c > a && c > b){
    console.log("C é maior")
}

let meia_entrada = " veio "

if(meia_entrada == "estudante" || meia_entrada == "idoso" || meia_entrada == "pcd" || meia_entrada == "baixa renda"){
    console.log("Você possui meia entrada")
}else{
    console.log("Você paga inteira")
}
