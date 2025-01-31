export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }
    get email() {
        return this.#email;
    }
    get nacimento() {
        return this.#nascimento;
    }
    get role() {
        return this.#role;
    }
    get ativo() {
        return this.#ativo;
    }
    set nome(novoNome) {
        if(novoNome === "") throw new Error('Formato de nome errado')
        this.#nome = novoNome;
    }
    set email(novoEmail) {
        this.#email = novoEmail;
    }
    set nacimento(novoNascimento) {
        this.#nascimento = novoNascimento;
    }
    set role(novoRole) {
        this.#role = novoRole;
    }
    set ativo(novoAtivo) {
        this.#ativo = novoAtivo;
    }

    exibirInfos() {
        if(this.role === "estudante") {
            return `dados estudante: ${this.nome}`;
        }
        if(this.role === "admin") {
            return `dados admin: ${this.nome}, ${this.role}`;
        }
        if(this.role === "docente") {
            return `dados docente: ${this.nome}, ${this.email}`;
        }
    }

    static exibirInfosGenericas(nome, email) {
        return `${nome}, ${email}`;
    }
}



//testes

    // #montaObjetoUser() {
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo,
    //     })
    // }

//const novoUser = new User('Mitsy', 'm@m.co', '2009-56-12');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));