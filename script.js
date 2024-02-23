
// trazendo o prompt-sync para nosso projeto
const prompt = require('prompt-sync')()
// funcao entrada
function getUserInfo(){
     let height = parseFloat(prompt("Digite sua altura")) // para o usuario digitar a informacao pelo prompt
     let weight = parseFloat(prompt("Digite seu peso"))
     return { // objeto, guarda diversas informacoes. 
         pesoInformado: weight, // propriedade peso
         alturaInformada:height // propriedade altura
     } // saida para funcao 
}

function calcImc(alturaDoUsuario = 0, pesoDoUsuario = 0){ // funcao independente , com duas variaveis que vao receber qualquer valor
    return pesoDoUsuario / alturaDoUsuario**2
}

function main(){ // juntando as duas funcoes 
    let peso = getUserInfo().pesoInformado // O ponto é  a proriedade daquele objeto
    let altura = getUserInfo().alturaInformada // O ponto é  a proriedade daquele objeto
    let imc = calcImc(altura,peso) // guardando a funcao em uma variavel com os parametros
    console.log(`Seu IMC é ${imc === 24? 'Voce esta maromba':'Nao'}`)
}
main()
