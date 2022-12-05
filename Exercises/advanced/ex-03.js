function sabe_javascript(habilidades){
    let knows = 'Não sabe Javascript';
    habilidades = habilidades.map(element=>element.toLowerCase());
    habilidades.forEach(element=>{
        if(element == 'javascript'){
            knows = 'Sabe Javascript'
        };
    });
    return console.log(knows);
}


let habilidades1 = ['Python', 'React', 'Javascript'];

let habilidades2 = ['Python', 'Bash', 'Linux'];

sabe_javascript(habilidades1)
sabe_javascript(habilidades2)
