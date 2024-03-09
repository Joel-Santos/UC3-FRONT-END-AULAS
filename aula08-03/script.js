const visor = document.getElementById('resultado')
let calc;
//essa função terá o papel limpar o visor
function clean(){
    visor.innerText = ""
    //limpar o visor a partir da variavel visor
}

//substring na funçao back

function insert(entrada){
    if(calc){
        if(entrada=='+' || entrada=='-' || entrada=='/' || entrada=='x'){
            visor.innerText += entrada
        }else{
            calc = ""
            visor.innerText = entrada
        }
    }else{
        visor.innerText += entrada
    }

    
// acessar o visor
//inserir ou concatenar a entrada recebida na function
}
function back(){
    visor.innerText = (visor.innerText.substring(0, visor.innerText.length-1))
}
function calcular(){
    calc = visor.innerText.replaceAll("x", "*")
    console.log(calc)
    // if(calc){
    //     visor.innerText = eval(calc)
    // }else{
    //     visor.innerText = "Deixe de ser idiota"
    // }
    try {
        visor.innerText = eval(calc)
    } catch (error) {
        visor.innerText = error
    }
}





