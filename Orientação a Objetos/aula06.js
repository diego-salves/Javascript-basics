class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`);
    }

    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`);
    }
}

class Carro {
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
   
}

// Instanciação de Objetos - Forma 1

// const curso = new Object();
// curso.nome = 'Programação em JavaScript';
// curso.preco = 27.99;

// console.log(curso);

// curso['qtd_alunos'] = 999;

// console.log(curso);

// delete curso['qtd_alunos'];
// delete curso['preco'];

// console.log(curso);


// Instanciação de Objetos - Forma 2 - Objeto Literal
const programa = {
    nome: 'Photoshop',
    preco: 8999.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Da paz, 45',
            bairro: 'Nova Lima',
            cidade: 'São Paulo'
        },
        filiais: [
            {cidade: 'Rio de Janeiro'},
            {cidade: 'Recife'}
        ]
    }
}

// console.log(programa);

//console.log(programa.nome); // Photoshop
//console.log(programa.fabricante.nome); // Adobe
//console.log(programa.fabricante.filiais.length); // 2
//console.log(programa['fabricante']['filiais'].length);

// programa.nome = 'PlayStation OS';

// console.log(programa.nome);

// console.log(programa);

// delete programa.fabricante.filiais;

// console.log(programa.fabricante.filiais); // undefined

// console.log(programa.fabricante.filiais.length); // ReferenceError


// Instanciação de Objetos - Forma 3 - Objeto Literal

// const pessoa = {};

// //console.log(typeof(pessoa));

// pessoa.nome = 'Angelina';

// console.log(pessoa);


// Instanciação de Objetos - Forma 4 - Função Construtora

// function Lampada(cor){
//     this.cor = cor;
// }

// const l1 = new Lampada('Branca');

// console.log(l1);

// console.log(typeof(l1));

// Instanciação de Objetos - Forma 5 - Objeto a partir das nossas classes

// const p1 = new Pessoa('Felicity', 'Sobrenome');
// console.log(p1);
// console.log(typeof(p1));
// console.log(p1.nome); //função get
// console.log(p1.sobrenome); //função gets

// p1.nome = 'Xuxa';
// console.log(p1);

// p1.falar('Vem aqui baixinho...');
// p1.comer();
// p1.beber();

const fit = new Carro("Fit");
fit.imprimir();


