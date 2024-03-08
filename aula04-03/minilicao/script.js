//1- Calcule o preço total de um produto após aplicar um desconto de 20%.
// function calcularDesconto(){
//     let preco = prompt("Digite o preço do produto:")
//     let desconto = prompt("Digite o percentual de Desconto:")
//     let novoPreco = preco - (preco*(desconto/100)) 
//     console.log(novoPreco)
//     const d = new Date().getFullYear();
//     alert("Novo Preço é " + novoPreco)
//     console.log(d)
// }

function calcularDesconto(){
    // let preco = prompt("Digite o preço do PRODUTO:")
    // let desconto = prompt("Digite o percentual do DESCONTO:")
    // let novoPreco = preco - (preco*(desconto/100))
    // console.log(novoPreco)
    // alert("Novo Preço é: " + novoPreco)
    let preco = document.getElementById('preco')
    let desconto = document.getElementById('desconto')
    let resultado =  document.getElementById('resultado01')
    let novoPreco = preco.value - (preco.value*(desconto.value/100))
    // resultado.innerText = "Novo Preço = " + novoPreco
   resultado.innerText = `Novo Preço = ${novoPreco} `
}

let botao01 = document.getElementById("questao01")
botao01.addEventListener("click", calcularDesconto)


function convCelsiusFare(){
    let celsius = document.getElementById('celsius').value
    let novaTemp = (celsius*(1.8)) + (32)
    let resultado = document.getElementById('resultado02')

    resultado.innerText = `Conversão = ${novaTemp}`
   
}

let botao02 = document.getElementById('questao02')
    botao02.addEventListener("click", convCelsiusFare)
// function convCelsiusFare(){
//     let celsius = prompt("Digite a Temperatura em Celsius:")
//     let novaTemp = (celsius*(9/5)) + (32)
//     console.log(novaTemp)
//     alert("A temperatura em Fahrenheit é: " + novaTemp)
// }

function calculaAreaPerimetroRetangulo(){
    let base = document.getElementById('base').value
    let altura = document.getElementById('altura').value
    let area = (base*altura)
    let perimetro = ((base*2)+(altura*2))
    let resultado = document.getElementById('resultado03')
    resultado.innerText = `A área é: = ${area} e o perímetro é: ${perimetro}`
    
}
let botao03 = document.getElementById('questao03')
    botao03.addEventListener("click", calculaAreaPerimetroRetangulo)

function calcularIdade(){
    const anoVigente = new Date().getFullYear()
    let resultado = document.getElementById('resultado04')
    let ano = document.getElementById('anoNascimento').value
    let idade = (anoVigente - ano)
    resultado.innerText=`A sua idade é:  ${idade}` 
    
}
let botao04 = document.getElementById('questao04')
    botao04.addEventListener("click", calcularIdade)



