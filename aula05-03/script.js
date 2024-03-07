let titulo = document.getElementById("titulo")
console.log(typeof titulo);
console.log(titulo.innerText);

function verificarTexto(){
    let entrada = document.getElementById('nome')
    if(entrada.value.length<5){
        entrada.className = "erro"
        alert("Valor menor que 5")
    }else{
        entrada.className = ""
        alert("Valor maior ou igual a 5")
    }
    if(entrada.hasFocus()){
        alert('hoooo')
    }

}