//acessando o DOM pelo ID

let header = document.getElementById('header1')
// header.innerText = "Joel Santos"
header.classList.add("texto")
header.innerHTML =`<h2> Adicionei um h2 aqui </h2>`
let elemento = document.createElement('textarea')
elemento.setAttribute('name', 'areaTexto')
elemento.setAttribute('id', 'areaTexto')
header.appendChild(elemento)

console.log(header.innerHTML)
// header.textContent = "Joel Santos"




