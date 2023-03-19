//1) Observe o trecho de código abaixo...

let indice = 13
let soma = 0
let k = 0

while(k < indice){
    k = k+1
    soma = soma + k
}

console.log(soma) // Resposta: o valor da variavel soma será 91

//2) Fibonacci

function fibonacci(numero){
    let n1= 0
    let n2= 1
    let soma
    let sequencia = []

    for(let contador = 0; contador <50; contador++){
        soma = n1 + n2; 
        n1 = n2
        n2 = soma
        sequencia.push(soma) //passando todos os valores que são somados para dentro de um array, para fazer a verificação se o número está presente ou não
    }
    
    if(!sequencia.includes(numero)){
        console.log('o numero não esta presente na sequência')
    }else{
        console.log('O número está presente na sequência')
    }
}

fibonacci(4) //Saída: o numero não esta presente na sequência
fibonacci(21) //Saída:O número está presente na sequência 

//3) Descubra a lógica e complete o próximo elemento:

//a) 1,3,5,7,__ Resposta : 9

//b) 2,4,8,16,32,64, __ Resposta : 128

//c) 0,1,4,9,16,25,36, __ Resposta : 49

//d)  4, 16, 36, 64, ___ Resposta: 100

//e) 1, 1, 2, 3, 5, 8, ___ Resposta: 13

//f)  2,10, 12, 16, 17, 18, 19, ____ Resposta: 20

//4)  Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

/*primeiro devemos descobrir em que momento eles vão se encontrar para isso, devemos fazer a equação horária de cada um dos corpos. tomando como referencial Ribeirão preto, o carro está no ponto 0 e o caminhão no ponto 100,
já que a distância entre as cidades são 100km
Importante: como o caminhão demora 10m a mais por conta dos 2 estágios, convertendo esse tempo em horas fica 0,16666...
Formula da equação horária: posição inicial + velocidade x tempo
Equação horária do carro = 0 + 110.t
Equação horaria do caminhão = 100 - 80.(t + 0,1666)

Igualando as 2 equações, e resolvendo as contas temos que
190t = 113,28
t = 0,59h esse será o tempo no qual eles vão se encontrar.

Agora que nós sabemos o tempo é so usar a formula da distância = velocidade x tempo, para descobrir quem
está mais proximo de ribeirão preto.

Carro = 110.(0,59) = 64,9 Km
Caminhão = 80.(0,59) = 47,2 Km

Isso significa que, ainda falta 52,8 km para o caminhão chegar em ribeirão preto. No entanto, como o carro se afastou 64,9 Km de ribeirão preto, isso significa que o caminhão está mais proximo da cidade.
 */



// 5) Escreva um programa que inverta os caracteres de um string.

function inverterString(texto) {
    let novaString = '';
    for (let i = texto.length - 1; i >= 0; i--) { //usei o método .length para pegar a palavra começando de trás, facilitando a inversão
      novaString += texto[i]; // apenas concatenei letra por letra na nova palavra
    }
    return novaString;
  }
  
  console.log(inverterString('Olá, mundo!')); // Saída: '!odnum ,álO'