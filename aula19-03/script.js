let usuarios  = JSON.parse(localStorage.getItem('users')) || []

// let user = {nome: "Joel Santos", senha:"abcmaiordetodos", email:"abc@email.com"}
// usuarios.push(user)

let botaoCadastro = document.querySelector('.cadastro form .botao')
botaoCadastro.addEventListener('click', cadastrarUser)

function cadastrarUser(event){
    event.preventDefault
    let usuario = document.getElementById('cadUsuario').value 
    let email = document.getElementById('email').value
    let senha = document.getElementById('cadSenha').value
    let confirmarSenha =  document.getElementById('confirmarSenha').value
    if(!usuario && !email && !senha && !confirmarSenha){
        alert('Preencha todos os campos, sujeito!!!')
        return
    }
    if(senha===confirmarSenha){
        let user = {usuario: usuario, email:email, senha:senha }
        usuarios.push(user)
        salvarUser()
    }else{
        alert('Senhas incompativeis')
    }
    usuario.value = ""
    email.value = ""
    senha =  ""
    confirmarSenha = ""

    
}


function salvarUser(){

    localStorage.setItem('users', JSON.stringify(usuarios))

}