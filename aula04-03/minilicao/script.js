//1- Calcule o preço total de um produto após aplicar um desconto de 20%.

function calcularDesconto(){
    let preco = prompt("Digite o preço do produto:")
    let desconto = prompt("Digite o percentual de Desconto:")
    let novoPreco = preco - (preco*(desconto/100)) 
    console.log(novoPreco)
    alert("Novo Preço é " + novoPreco)
}



