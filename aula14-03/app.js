//Passo 01 - armazenar um número atraves de uma função e receber o valor do input
let numeroSecreto = gerarNumeroSecreto()
// Acessando o elemento input com a utilização do querySelector (seletor de classe)
let numeroChute = document.querySelector('.container__input')
let tentativas = 0
let botaoReiniciar = document.getElementById('reiniciar')

//passo 02 - construção da função para gerar o número aleatorio entre 1 e 10
function gerarNumeroSecreto(){
    let numero = Math.floor(Math.random()*10)+1
    return numero
}
//passo 03 - função para verificar se a chute é igual ao número aleatorio
function verificarChute(){
    console.log(numeroChute.value)
    tentativas++
    if(numeroChute.value==numeroSecreto){
        //alert(`O mizeravi acertou em ${tentativas} tentativas !`)
        let paragrafo = document.querySelector('.texto__paragrafo').innerText = `O mizeravi acertou em ${tentativas} tentativas !`
        let h1 = document.querySelector('h1').innerText = `ACERTOUUU!!!`
        botaoReiniciar.removeAttribute('disabled')
        let verificarChute = document.getElementById('verificarchute')
        verificarChute.setAttribute('disabled', 'true')
    }else if(numeroChute.value>numeroSecreto){
        document.querySelector('.texto__paragrafo').innerText = 'O número secreto é menor.'
        //alert('O número secreto é menor')
        //alert(`Quantidadede tentativas = ${tentativas}`)
    }else{
        document.querySelector('.texto__paragrafo').innerText = 'O número secreto é maior.'
        //alert('O número secreto é maior')
        //alert(`Quantidadede tentativas = ${tentativas}`)
    }  
}
function reiniciarJogo(){
    //alert('reiniciando')
    tentativas = 0
    numeroSecreto = gerarNumeroSecreto()
   // botaoReiniciar.setAttribute('disabled')
    window.location.reload(true)
}





