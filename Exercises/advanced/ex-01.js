let endereco = {
    rua : "Rua da paz",
    numero: 42,
    bairro: "Cachoeira",
    cidade: "Campo Grande",
    uf: "MS"
};

function imprime(objeto){
    return console.log(`O usuário mora em ${objeto.cidade}/${objeto.uf}, no bairro ${objeto.bairro}, na ${objeto.rua}, número ${objeto.numero}.`)
}


imprime(endereco)
