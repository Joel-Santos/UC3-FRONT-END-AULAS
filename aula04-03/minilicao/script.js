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
    let celsius = prompt("Digite a Temperatura em Celsius:")
    let novaTemp = (celsius*(9/5)) + (32)
    console.log(novaTemp)
    alert("A temperatura em Fahrenheit é: " + novaTemp)
}

function calculaAreaPerimetroRetangulo(){
    let base = prompt("Digite a Base do Retangulo:")
    let altura = prompt("Digite a Altura do Retangulo:")
    let area = (base*altura)
    let perimetro = ((base*2)+(altura*2))
    console.log(area)
    alert(`A Área e o Perimetro do Retangulo são respectivamente: ${area} e ${perimetro}`)
    
}
function calcularIdade(){
    const anoVigente = new Date().getFullYear()
    let ano = prompt("Digite o ano de nascimento:")
    let idade = (anoVigente - ano)
    console.log(idade)
    alert("A sua idade é: " + idade) 
}



