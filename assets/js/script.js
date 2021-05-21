/*
Case Sensitive = reconhece letras maiusculas e minusculas
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')
let mensagem = document.querySelector('#mensagem')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length<3){
        txtNome.innerHTML = 'nome inválido'
        txtNome.style.color = 'red'
        txtNome.style.fontSize= '13px'
    }else {
        txtNome.innerHTML = ''
    }

}
    function validaEmail() {
        let txtEmail = document.querySelector('#txtEmail')
        if(email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1 ){
            txtEmail.innerHTML = 'email inválido'
            txtEmail.style.color = 'red'
            txtEmail.style.fontSize= '13px'
        }else {
            txtEmail.innerHTML = ''
        }

}

function validaMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')
    if(mensagem.value.length >= 100){
        txtMensagem.innerHTML = 'Texto inválido. Muito grande, digite no máximo 100 caracteres.'
        txtMensagem.style.color = 'red'
        txtMensagem.style.fontSize= '13px'
    }
}