function pares_no_intervalo(num1, num2){
    let bigger, smaller =  0
    let lista = new Array()

    if (num1 > num2){
        bigger = num1
        smaller = num2
    } else {
        bigger = num2
        smaller = num1
    }

    for (smaller; smaller <= bigger; smaller++){
        if (smaller % 2 == 0){
            lista.push(smaller)
    }else {
        continue
    }}

    //lista.sort((a,b)=>{return a - b});   why isn't working?

    for (let i = 0; i<lista.length ;i++){
        if (lista[i] < 0){
            lista.reverse()
            break
        } else {
            continue;
        }
    };

    return console.log(lista)
}


pares_no_intervalo(1, 42);


