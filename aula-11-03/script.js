let lista = document.getElementById('lista')
let tarefa = document.getElementById('tarefa')
let botao = document.getElementById('adicionar')

function add(event){
    event.preventDefault()
    let item = document.createElement('li')
    item.textContent = tarefa.value // value deve ser usado para receber os dados dos inputs de um form
    item.addEventListener("click", concluido)
    let excluir = document.createElement('button')
    excluir.textContent = "Remover"
    excluir.classList.add("botaoRemover")
    excluir.addEventListener('click', remover)
    item.appendChild(excluir)
    lista.appendChild(item)
    tarefa.value = ""
}
botao.addEventListener('click', add)

function concluido(){
  this.classList.add("concluido");
}

function remover(event){
  let itemExcluir = event.target.parentElement
  itemExcluir.remove()
}