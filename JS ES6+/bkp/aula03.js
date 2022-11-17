/*
    - Conjuntos não aceitam repetição de valores;
    - Conjuntos não são indexados;
*/

// Declarando um conjunto
let cursos = new Set();

// Adicionando valores
cursos.add('Programação para Leigos');
cursos.add('Algoritmos e Lógica de Programação');

// Adicionar valores concatenados
cursos.add('Programação em C').add('Programação em Java').add('Programação em Python');

cursos.add('Banco de Dados');
cursos.add('Programação Web com Django Framework');

let ret = cursos.add('Banco de dados');
//console.log(ret);

//console.log(cursos);

// Accessando o tamanho do conjunto
//console.log(cursos.size); 

//console.log(cursos.has('Banco de dados')); 

// Deletar elementos de um conjunto
//let ret = cursos.delete('Programação para leigos');
//console.log(ret);

let frutas = ['Manga', 'Uva', 'Jaca', 'Uva'];
let frutas_unicas = new Set(frutas);
console.log(frutas_unicas);
