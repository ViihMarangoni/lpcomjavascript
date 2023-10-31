/* Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:salário bruto.
quanto pagou ao INSS.
quanto pagou ao sindicato.
o salário líquido.
calcule os descontos e o salário líquido, conforme a tabela abaixo:+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$
Obs.: Salário Bruto - Descontos = Salário Líquido.
*/

let ganho_hora, horas_trabalhadas, ir, inss, sindicato, salarioliquido, salariobruto

ganho_hora = 25.00
horas_trabalhadas = 44
salariobruto = ganho_hora * horas_trabalhadas
ir = (11/100) * salariobruto
inss = (8/100) * salariobruto
sindicato = (5/100) * salariobruto
salarioliquido = salariobruto - ir - inss - sindicato

console.log("O seu salário bruto é: " + salariobruto.toFixed(2) 
+ "\nvocê pagou de ir: " + ir.toFixed(2)
+ "\nvocê pagou de inss: " + inss.toFixed(2)
+ "\nvocê pagou de sindicato: " + sindicato.toFixed(2)
+ "\nvocê recebeu: " + salarioliquido.toFixed(2))
  /*
let valor_hora = 37.5
let horas_mes = 180
let salario_bruto = valor_hora * horas_mes
let ir = salario_bruto * 0.11
let inss = salario_bruto * 0.08
let sindicato = salario_bruto * 0.05
let descontos = ir + inss + sindicato
let salario_liquido = salario_bruto - descontos
console.log("IR (11%) : R$ " ir.tofixed(2))
console.log("INSS (8%) : R$ " inss.tofixed(2))
console.log("SINDICATO (11%) : R$ " sindicato.tofixed(2))
console.log("SALÁRIO LÍQUIDO : R$ " salario_liquido.tofixed(2))
  */