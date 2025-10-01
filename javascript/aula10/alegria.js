let login
let senha
let loginCerto = "thiago@email.com"
let senhaCerta = "batatinha123"
// Enquanto a senha que o usuário inserir for diferente da senha certa continuaremos pedindo para que ele insira a senha novamente.

// Do = Faça e While = enquanto, O que dá nome a estrutura dowhile, ou seja, faça enquanto. 
// Dowhile executa o código uma vez antes de fazer a comparação. 

do {
    login = prompt("Insira seu e-mail:")
    senha = prompt("Insira sua senha")
} while (login != loginCerto && senha != senhaCerta);

// Peça a senha pelo menos uma vez, e caso o usuário não coloque a senha certa, repita o pedido.