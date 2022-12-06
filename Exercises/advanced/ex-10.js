let clientes = [
    { nome: "Fernanda Piereti", idade: 32, empresa: "Google" },
    { nome: "Juliana Paz", idade: 29, empresa: "Globo" },
    { nome: "Maria Silva", idade: 33, empresa: "Google" },
];

let show = clientes.find((element)=> element.empresa == "Udemy");

console.log(show);