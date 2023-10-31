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

console.log("O seu salário bruto é: " + salariobruto 
+ "\nvocê pagou de ir: " + ir 
+ "\nvocê pagou de inss: " + inss
+ "\nvocê pagou de sindicato: " + sindicato
+ "\nvocê recebeu: " + salarioliquido)
