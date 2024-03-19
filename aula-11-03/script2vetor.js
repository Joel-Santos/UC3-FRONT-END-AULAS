let listaDeTarefas = JSON.parse(localStorage.getItem('banco')) || []

let lista = document.getElementById('lista')
let tarefa = document.getElementById('tarefa')
let botao = document.getElementById('adicionar')

function add(event){
    event.preventDefault()
    if(tarefa.value){
        //adcionando um item ao vetor listaTarefas
        listaDeTarefas.push(tarefa.value)
        tarefa.value = ""
        atualizarLista()
        localStorage.setItem('banco', JSON.stringify(listaDeTarefas));
    }else{
        alert('Preencha o campo')
    }


}
function atualizarLista(){
    lista.innerHTML = ""
    listaDeTarefas.forEach((tarefa, index)=>{
        let item = document.createElement('li')
        item.textContent = tarefa
        let excluir = document.createElement('button')
        item.addEventListener("click", concluido)
        // excluir.textContent = "Remover"
        excluir.classList.add("botaoRemover")
        excluir.addEventListener('click', function(){remover(index)})
        item.appendChild(excluir)
        lista.appendChild(item)
    }) 
}

    // let item = document.createElement('li')
    // item.textContent = tarefa.value // value deve ser usado para receber os dados dos inputs de um form
    // item.addEventListener("click", concluido)
    // let excluir = document.createElement('button')
    // excluir.textContent = "Remover"
    // excluir.classList.add("botaoRemover")
    // excluir.addEventListener('click', remover)
    // item.appendChild(excluir)
    // lista.appendChild(item)
    // tarefa.value = ""

botao.addEventListener('click', add)

function concluido(){
  this.classList.add("concluido");
}

function remover(index){
  //let itemExcluir = event.target.parentElement
  //itemExcluir.remove()
listaDeTarefas.splice(index, 1)
localStorage.setItem('banco', JSON.stringify(listaDeTarefas));
atualizarLista()

}

atualizarLista()