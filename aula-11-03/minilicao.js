// Questão 1: HTML, CSS e JavaScript Dentro da estrutura HTML e estilo CSS, crie um array chamado "cores" que contenha três nomes de cores de sua escolha. Utilize JavaScript para exibir cada cor em um parágrafo no corpo da página HTML. Adicione um estilo para destacar o texto do array quando o mouse passar sobre ele.

let cores = ["Preto","Branco","Azul", 'vermelho']
//let body = document.getElementsByTagName('body')
let body = document.querySelector('body')
// body.innerHTML+=
// `
//     <p> ${cores[0]} </p>
//     <p> ${cores[1]} </p>
//     <p> ${cores[2]} </p>
// `

//body.appendChild(p)



for(let i=0; i<cores.length; i++){
    let p = document.createElement('p')
    p.textContent = cores[i]
    body.appendChild(p)

}

cores.forEach((cor, index) => {
    let p = document.createElement('p')
    p.textContent = cor
    console.log(cor, index)
    body.appendChild(p)
});


//acessar o body com o dom

//criar as tags P

