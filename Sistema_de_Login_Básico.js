let email = 'usuario@gmail.com'
let senha = 'senha123'
let emailAdmin = 'admin@gmail.com'
let senhaAdmin = 'admin123'

function login(inputEmail, inputSenha) {
    if (inputEmail === email && inputSenha === senha) {
        console.log('Login bem-sucedido! Bem-vindo, ' + inputEmail);
   
    } else {
        console.log('Login falhou! Verifique seu email e senha.');
    }
}
