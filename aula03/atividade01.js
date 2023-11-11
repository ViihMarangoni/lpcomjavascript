

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
frutas.unshift("Maçã") // unshift adicona o elemento no início do array
console.dir(frutas)

// Adicionar um novo elemento no final do Array
frutas.push("Uva") // push adiciona o elemento no final do array
console.dir(frutas)

// Ordenar o Array em ordem crescente
frutas.sort() // sort deixa o array em ordem crescente
console.dir(frutas)

// Ordenar o Array em ordem decrescente
frutas.sort(function(a, b) {
    return b.localeCompare(a)
  });                                    
  console.dir(frutas)
    // Certamente! A expressão b.localeCompare(a) é usada para comparar duas strings (a e b). Quando usada com sort() em um array, ela faz com que o array seja ordenado em ordem decrescente com base nas strings contidas nele.

// Remover o primeiro item do Array
frutas.shift() // shift remove o primeiro item do array
console.dir(frutas)

// Remover o ultimo item do Array
frutas.pop() // pop remove o último item do array
console.dir(frutas)