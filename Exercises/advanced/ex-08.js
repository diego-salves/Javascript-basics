let clientes = [
    { nome: "Fernanda Piereti", idade: 32, empresa: "Google" },
    { nome: "Juliana Paz", idade: 29, empresa: "Globo" },
    { nome: "Maria Silva", idade: 33, empresa: "Google" },
];

let show = clientes.map((element)=>{return element.idade});

console.log(show)