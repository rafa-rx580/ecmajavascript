let num = [5, 2, 3, 8];
console.log(`Nosso vetor é: ${num}`)
num[4] = 6
num.push(1)
console.log(num)
console.log(num.length)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Em ordem crescente: ${num.sort()}`)
let pos = num.indexOf(2)
console.log(`O valor 2 está na posição ${pos}`)