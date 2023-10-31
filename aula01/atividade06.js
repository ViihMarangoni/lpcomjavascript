// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

let valor_hora, hora_trabalhada, salario
valor_hora = 40
hora_trabalhada = 80
salario = valor_hora * hora_trabalhada

console.log("Você ganha R$ " + valor_hora + " por hora e trabalha " + hora_trabalhada+ " hrs por mês, o salário total no mês é de R$ " + salario.toFixed(2)) // tofixed coloca 2 casas decimais 