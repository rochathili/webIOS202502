let gostoDoSESC = false
let gostoDeCachoeira = true

// || significa OU, ou seja, se eu gostar de cachoeira e não gostar do SESC, tanto faz. Contanto que um OU outro seja verdade, o código vai rodar.
if (gostoDeCachoeira == true || gostoDoSESC == true){
    console.log("Vou nadar! 🏊‍♀️");
}
else{
    console.log("Não vou nadar");
}