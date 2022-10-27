//console.log(nome); // ReferenceError

//console.log('Oi...');

//console.log(4.Oi());

// Tratamos erros com try/catch
// try{
//     console.log(nome);
// }catch(e){
//     console.log('Não foi possível imprimir nome.');
//     console.log(e.name);
//     console.log(e.message);
// }

// console.log("Oi...");

//Lançando erros
function dividir(num1, num2){
    if(num1 === 0 || num2 === 0){
        throw("Os valores devem ser positivos."); //lançando uma exceção (erro)
    }else{
        return num1 / num2;
    }
}

try{
    let ret = dividir(8, 2);
    console.log(ret);
}catch(e){
    console.log('Não foi possível dividir.');
}finally{
    console.log('Vamos continuar...');
}
