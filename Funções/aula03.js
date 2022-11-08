function calcular_idade1(ano_nascimento){
    const data = new Date(); // gera a a data atual 

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getUTCFullYear() - ano_nascimento;

    console.log(idade);
}



let ret = calcular_idade1(1998);
//console.log(ret + 3);


//calcular_idade2(1998);


const data = new Date();

//console.log('Data Completa: ' + data);

//console.log('Ano: ' + data.getFullYear());

//console.log('Mês: ' + data.getMonth()); // 0 para janeiro, 1 para feveiro....

// Fique esperto!

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(4, 6)); // 10

console.log(somar(4)); // ?? NaN - Not a Number

console.log(somar(4, 6, 8)); // 10 

console.log(somar(4, 6, 8, 3, 2, 1, 19)); // 10

