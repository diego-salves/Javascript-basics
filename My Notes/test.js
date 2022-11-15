class Moci{
    constructor(name, cor){
        this._name = name;
        this._cor = cor;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get cor(){
        return this._cor;
    }

    set cor(cor){
        this._cor = cor;
    }

    falar(msg){
        console.log($`${this._name} está falando ${msg}, sua cor é ${cor}`)
    }

}

