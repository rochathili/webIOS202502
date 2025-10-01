console.log("Bem vindo(a) a Sorveteria do Gato Mineiro");
console.log("Nossos sorvetes custam R$2,00");
console.log("Temos sorvetes de chocolate, morango e baunilha");

let dinheiroDoCliente = 9.0
let precoSorvete = 2.00
let saborEscolhido = "chocolate"

// Vamos ver se a pessoa tem dinheiro para comprar o sorvete

if(dinheiroDoCliente >= precoSorvete){
    if (saborEscolhido == "chocolate") {
        console.log("Aqui seu sorvete de chocolate! 🍫");
    }
    else if(saborEscolhido == "morango"){
        console.log("Aqui seu sorvete de morango! 🍓");
    }
    else if(saborEscolhido == "baunilha"){
        console.log("Aqui seu sorvete de baunilha! 🌼 ");
    }
    else{
        console.log("Não temos esse sorvete no cardápio");
    }
}
else{
    console.log("Infelizmente seu dinheiro não é o suficiente");    
}