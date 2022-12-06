class Usuario {
    constructor (email, senha){
        this._email = email;
        this._senha = senha;
    }

    get email(){
        return this._email;
    } 

    get senha(){
        return this._senha;
    }

    set email(email){
        this._email = email;
    }

    set senha(senha){
        this._senha = senha;
    }

    ehAdmin(){
        if(this.admin == true){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

class Admin extends Usuario {
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }

    get email(){
        return this._email;
    } 

    get senha(){
        return this._senha;
    }

    set email(email){
        this._email = email;
    }

    set senha(senha){
        this._senha = senha;
    }
}


let usuario1 = new Usuario("joao@gmail.com", "senhasegura");
let usuario2 = new Admin("maria@gmail.com", "senhasupersegura");

usuario1.ehAdmin(); //false
usuario2.ehAdmin(); //true

