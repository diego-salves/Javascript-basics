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
