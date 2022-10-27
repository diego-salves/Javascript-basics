function experience(years){
    if (years < 0){
        console.log('Estagiário');
    } else if (years >= 0 && years < 3){
        console.log('Júnior');
    } else if (years >= 3 && years < 6){
        console.log('Pleno');
    } else if (years >= 6){
        console.log('Sênior');
    } else { 
        console.log(`Sorry, '${years}' is not an acceptable value`)
    }
}

experience('oi')

