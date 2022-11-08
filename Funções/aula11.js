/*
Função Fábrica - Function Factory
*/

function fabricar_curso(n, p){
    const desconto = 0.90;
    return {
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricar_curso('Programação em JavaScript', 27.99));
console.log(fabricar_curso('Criação de APIs com Django Rest Framework', 35.99));

cursos = []

for(let i = 0; i < 5; i++){
    cursos.push(fabricar_curso(`Curso ${i + 1}`, `${19.99 + i * 3}`));
}

console.log(cursos);

