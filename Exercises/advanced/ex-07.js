let usuario1 = new Usuario("joao@gmail.com", "senhasegura");
let usuario2 = new Admin("maria@gmail.com", "senhasupersegura");

console.log(usuario1.ehAdmin()); //false
console.log(usuario2.ehAdmin()); //true

