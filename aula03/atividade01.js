

let frutas = ["Laranja", "Abacaxi", "Morango"]
//             0          1          2        =       posições
// Exibindo Array inteiro
console.dir(frutas)

// Exibindo uma posição do Array
console.log(frutas[2])

// Alterando o valor de uma posição do Array
frutas[1] = "Pêra"
console.dir(frutas)

// Adicionar um novo elemento no início do Array
frutas.unshift("Maçã") // unshift é um método do array
console.dir(frutas) // dir é um método do console

// Adicionar um novo elemento no final do Array
frutas.push("Uva") // push adiciona o elemento no final do array
console.dir(frutas)

// Ordenar o Array em ordem crescente
frutas.sort() // sort deixa o array em ordem crescente
console.dir(frutas)

// Ordenar o Array em ordem decrescente
frutas.reverse() // reverse deixa o array em ordem decrescente
console.dir(frutas)

// Remover o primeiro item do Array
frutas.shift() // shift remove o primeiro item do array
console.dir(frutas)

// Remover o ultimo item do Array
frutas.pop() // pop remove o último item do array
console.dir(frutas)