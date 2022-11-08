const curso = {
    nome: 'Programação com JavaScript',

    imprimir(){
        console.log(this.nome);
    }
}


//curso.imprimir();

const executar = curso.imprimir;

// executar(); // undefined

// Resolvendo este conflito com bind

const novo_executar = curso.imprimir.bind(curso);

novo_executar();

