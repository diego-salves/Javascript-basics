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


