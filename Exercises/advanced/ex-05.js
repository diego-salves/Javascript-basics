function retornaString(objectList){
    objectList.forEach((element) => {return console.log(`O(a) programador(a) ${element.nome} possui os skills: ${element.skills.join(', ')}.`)});
}

var programadores = [
    {
        nome: "Julia Pascoal",
        skills: ["Python", "Bash", "Linux"]
    },
    {
        nome: "Patricia Silveira",
        skills: ["Javascript", "Flutter", "Ruby"]
    },
    {
        nome: "Diego Santos",
        skills: ["Python", "Javascript", "Typescript"]
    }
];



console.time('Using Function');

//programadores.forEach((element) => {return console.log(`O(a) programador(a) ${element.nome} possui os skills: ${element.skills.join(', ')}.`)});
retornaString(programadores);
//tried using forEach out of a function and it runs a lot slower than the common for, could it be because the common one uses i as a iterator, not validating it, just using as index?
console.timeEnd('Using Function')

console.time('Normal for')

 for (let i = 0; i < programadores.length; i++){
    console.log(`O(a) programador(a) ${programadores[i].nome} possui as skills: ${programadores[i].skills.join(', ')}.`)
};

console.timeEnd('Normal for')
//using normal for to test speed difference
