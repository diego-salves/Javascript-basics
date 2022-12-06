let clientes = [
    { nome: "Fernanda Piereti", idade: 32, empresa: "Google" },
    { nome: "Juliana Paz", idade: 29, empresa: "Globo" },
    { nome: "Maria Silva", idade: 33, empresa: "Google" },
];


let show = clientes.forEach((element)=> {return element.idade = element.idade * 2});
let b = clientes.filter((element) => element.idade > 60);
console.log(clientes);
console.log(b);