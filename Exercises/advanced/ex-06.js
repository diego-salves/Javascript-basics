function maior_de_idade(age){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (age>= 18){
    resolve();
    } else if (age < 18){
    reject();
    }}, 3000)});
}


    

maior_de_idade(120)
    .then(()=>{
        console.log("Maior de idade");
    })
    .catch(()=>{
        console.log("Menor de idade");
    });