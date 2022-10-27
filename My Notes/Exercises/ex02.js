function showOdd (a,b){
    let max = 0
    let min = 0
    a > b ? max = a : max = b;
    max == b ? min = a : min = b;

    while (min < max - 1){
        min++
        if (min % 2 != 0)
            console.log(min)   
    }
}

showOdd(1, 50)