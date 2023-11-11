let personagem = [
    "Lyra Shadowthorn",
    "Feiticeira das Sombras",
    "Elfa Lunaris",
    "Bastão Lunar Obsidiano",
    100, // vida
    50 // força
]

console.log("==== FICHA DO PERSONAGEM ====")
console.log("Nome: " + personagem[0])
console.log("Classe: " + personagem[1])
console.log("Raça: " + personagem[2])
console.log("Equipamento: " + personagem[3])
console.log("Vida: " + personagem[4])
console.log("Força: " + personagem[5])

console.log("CAPÍTULO 01 - O INÍCIO")
console.log("Você acaba de chegar na cidade e foi logo procurar uma taverna para poder beber e comer!")
console.log("Você ouve um burburinho sobre um dragão vermelho assolado a cidade. Você vê a chance de fazer dinheiro usando o desespero das pessoas e prometendoo que você nunca cumpre: Matar o dragão.")
console.log("Você tenta se aproximar para ouvir melhor. Role o dado e faça um teste para ver se você consegue")

let dado = Math.floor(Math.random() * (6 - 1 + 1)) + 1 // sorteia um número entre 1 e 6
if(dado > 5){
    console.log("SUCESSO!!! Você consegue ouvir a conversa e descobre que o dragão dorme em cima de uma pilha de ouro.")
}else{
    console.log("FALHA!!! Você só consegue ouvir o seu próprio arroto, você tropeça e cai de cara no chão, perca 2 de vida.")
    personagem[4] = personagem[4] - 2
    console.log("Vida: " + personagem[4])
}