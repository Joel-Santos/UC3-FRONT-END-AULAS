let lista = document.getElementById('lista')
let tarefa = document.getElementById('tarefa')
let botao = document.getElementById('adicionar')

function add(event){
    event.preventDefault()
    let item = document.createElement('li')
    item.textContent = tarefa.value
    item.addEventListener('click', concluido)
    lista.appendChild(item)
    tarefa.value = ""
}
botao.addEventListener('click', add)

function concluido(){
  this.classList.add("concluido");
}