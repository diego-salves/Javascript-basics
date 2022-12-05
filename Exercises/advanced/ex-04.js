function nivel(experiencia){
    if (experiencia >= 0 & experiencia < 2){
        return console.log("Iniciante");
    } else if (experiencia > 0 & experiencia < 4){
        return console.log("Intermediário");
    } else if (experiencia >=4 & experiencia <= 6){
        return console.log("Avançado");
    } else if (experiencia >= 7) {
        return console.log("Jedi Fucking Master");
    } else {
        return console.log("Valor inválido");
    };
}

nivel(-1);
nivel(0);
nivel(1);
nivel(2);
nivel(3);
nivel(4);
nivel(5);
nivel(6);
nivel(7);
nivel(8);
