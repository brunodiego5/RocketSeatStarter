class User {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }


}

class Admin extends User {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());