function imprime(object){
    return console.log(`O(a) cliente ${object.nome} mora em ${object.cidade}, ${object.uf}.`)
}

var cliente = {
    nome: "Maria das Graças Xuxa Meneguel",
    email: "xuxa@666.com",
    telefone: "+55 11 666-6566",
    rua: "Rua dos Baixinhos",
    numero: 666,
    bairro: "Pinheiros",
    cidade: "São Paulo",
    uf: "SP"
}

imprime(cliente)

