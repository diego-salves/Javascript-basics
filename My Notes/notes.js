//for
for (var i = 1; i <= 10; i++){
    console.log(i)
}

var x = 1;

//while
while (x <= 10){
    console.log(x)
    x++
} 

x = 1

//do
do {
 console.log(x);
 x++;   
} while (x <= 10);

//forEach

var cursos = [
    'Javascript',
    'Python',
    'Java',
    'React',
    'SQL',
    'Next'
]

function print(curso, indice, array){
    console.log(`O curso ${curso} está no índice ${indice}`)
}

cursos.forEach(print)

//passa 3 parametros, valor, indice e array
//usando lambda

cursos.forEach(function(curso,indice){console.log(`${indice} - ${curso}`)})


// map = mapeia os dados do array, aplica uma transformação e retorna um novo array de mesmo tamanho do original

var valores = [2,4,6,8,10]

var dobro = valores.map(function(valor){return valor * 2;});

console.log(dobro)

//encadeando maps
var oi = valores.map(soma_4).map(divide_por_5)
console.log(oi)

// for each e map são parecidos, mas o foreach não gera um novo array, por isso pode encadear os maps

// Filter - faz o que o nome diz


var valores = [1,2,3,4,5,6,7,8,9,10];

function filtrar_pares(valor){
   return valor % 2 === 0;            
}

function filtrar_impares(valor){
    return valor % 2 !== 0;  
}

function filtrar_multiplos_5(valor){
    return valor % 5 ===0;
}

var resultado = valores.filter(filtrar_pares);

console.log(resultado)

// diferença do map é que traz um array menor geralmente, por filtrar, mas filter não executa alterações no array

// HOISTING = Iça a variável caso seja declarada como var 

console.log(nome)

var nome = "Diego";

console.log(nome)

// reduce

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

function preco_maior_que_4(valor){
    return valor > 4;
}

ret = precos.filter(element => element > 4).map(element => element + 5).reduce((anterior,atual) => {return (anterior / 2) + atual});
console.log(ret);


//Destructuring 

//array

const numeros = [1, 2, 3, 4];

const [num1, , num3, num4] = numeros; //descartando valores

// console.log(num1);
// console.log(num3);
// console.log(num4);

//setando valores default caso não haja no container

const [n1, n2, n3, n4 = 38, n5 = 99,n6 = 'True', n7] = numeros;

console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(n5)
console.log(n6)
console.log(n7)

//objeto

const produto = {
    nome: "pc gamer",
    preco: 1678.44
}

const {nome, preco} = produto;

console.log(nome);
console.log(preco);

//Destructuring extrai dados dos containers para as variáveis


