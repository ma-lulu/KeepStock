function getFormCadastro(){
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmaSenha = document.getElementById("confirmaSenha").value;


}

function verificaSenha(senha, confirmaSenha){
    if(senha.lenght > 6){
        if(senha === confirmaSenha){
            
        }
    }
}