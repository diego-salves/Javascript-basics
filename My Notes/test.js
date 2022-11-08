function sum(){
    let soma = 0;

    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}


var resultado = sum(1,2,4,5)
console.log(resultado)