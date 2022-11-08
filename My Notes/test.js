var precos = [4.5, 3.78, 9.78, 1.34]

var soma = 0

for (var i = 0; i < precos.length; i++){
    soma = soma + precos[i]
}

console.log(soma)

var soma2 = 0

precos.forEach(valor => soma2 += valor);

console.log(soma2)

console.log(precos)

function multiplicar(valor){
    return valor * 3;
}

var m = 1

precos.forEach(element => m *= element);
console.log(m)

var resultado = precos.reduce(multiplicar);
console.log(resultado)

function adicionar_taxa(valor){
    return valor + 5;
}

function divide_por_2(anterior, atual){
    return (anterior / 2) + atual
}

console.log(precos)
var resultado2 = precos.map(adicionar_taxa).reduce(divide_por_2);

console.log(resultado2)