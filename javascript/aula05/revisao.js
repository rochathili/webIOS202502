let dinheiro = 10
let precoSorvete = 2.50
let saborEscolhido = "céu-azul"

console.log("Boa noite! Bem-vindo à sorveteria do Ceará!");

if(dinheiro >= precoSorvete){
    // Se o cliente tem dinheiro suficiente
    console.log("Temos os seguintes sabores: Chocolate, morango e céu-azul");

    if(saborEscolhido == "chocolate" || "morango" ||  "céu-azul"){
        console.log("Aqui está seu sorvete de " + saborEscolhido);
    }
    else{
        console.log("Não temos esse sabor, desculpe 😭");
    } 
}
else{
    // Se o cliente NÃO tem dinheiro suficiente
    console.log("Tá pobrinho, amigo 😭");
}