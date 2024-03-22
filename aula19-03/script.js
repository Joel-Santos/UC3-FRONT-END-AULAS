let usuarios  = JSON.parse(localStorage.getItem('users')) || []

// let user = {nome: "Joel Santos", senha:"abcmaiordetodos", email:"abc@email.com"}
// usuarios.push(user)

let botaoCadastro = document.querySelector('.cadastro form .botao')
botaoCadastro.addEventListener('click', cadastrarUser)
let botaoLogin =  document.querySelector('.login form .botao')
botaoLogin.addEventListener('click', Login)

function cadastrarUser(event){
    let nomeUser = document.getElementById('cadUsuario').value 
    let cadEmail = document.getElementById('email').value
    let senha = document.getElementById('cadSenha').value
    let confirmarSenha =  document.getElementById('confirmarSenha').value
    if(!nomeUser && !cadEmail && !senha && !confirmarSenha){
        alert('Preencha todos os campos, sujeito!!!')
        event.preventDefault()  
    }
    //verificar se existe um usuario ou email já cadastrado
    if(usuarios.find((u) => u.usuario === nomeUser) || usuarios.find((u) => u.email === cadEmail) ){
        alert('O nome de usuário ou E-mail já existe!')  
        event.preventDefault()     
    }else{
        if(senha===confirmarSenha){
            let user = {usuario: nomeUser, email:cadEmail, senha:senha }
            usuarios.push(user)
            salvarUser()
            alert('Usuário cadastrado com sucesso!')
            nomeUser.value = ""
            cadEmail.value = ""
            senha =  ""
            confirmarSenha = ""
        }else{
            alert('Senhas incompativeis')
        }
    }     
}

function Login(event){
   event.preventDefault()
    let loginUser = document.getElementById('usuario').value
    let loginSenha = document.getElementById('senha').value
    let user = usuarios.find((u) => u.usuario === loginUser && u.senha===loginSenha) 
    //let senhaUserBanco = usuarios.find((u) => u.senha === loginSenha)

   

    if(user){
        alert('Bem Vindo Jovem!')
    }else if(!user.usuario || !user.senha){
        alert('Usuário ou senha incorreta')
    }else{
        
        alert('Cadastro não encontrado!')
        console.log(`user : ${user.usuario} senha: ${user.senha}`)
    }
}




function salvarUser(){
    localStorage.setItem('users', JSON.stringify(usuarios))
}