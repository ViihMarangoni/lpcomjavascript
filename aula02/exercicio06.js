// Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

let xiomi = 1500
let iphonexr = 1600
let iphone15 = 7999

if(xiomi < iphonexr && xiomi < iphone15){
    console.log("O produto mais barato é o: Xiomi")
}else if(iphonexr < xiomi && iphonexr < iphone15){
    console.log("O produto mais barato é o: IPhone Xr")
}else if(iphone15 < xiomi && iphone15 < iphonexr){
    console.log("O produto mais barato é o: IPhone 15")
}