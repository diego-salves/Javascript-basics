let nome = "Fernanda Lima";
let idade = 34;

/*function mostrarUsuario(nome = "Fernanda Lima", idade = 19){
    return { nome, idade };
}
*/
let y = (nome = "Fernanda Lima", idade = 19) => {return { nome, idade }};

console.log(y(nome, idade));
console.log(y(nome));