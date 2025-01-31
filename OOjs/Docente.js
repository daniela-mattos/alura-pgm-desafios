import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }
    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso de ${curso}, responsável: ${this.nome}.`;
    }
}

// const novoDocente = new Docente('Oytc', 'o@d.com', '2024-01-04');
// console.log(novoDocente.aprovarEstudante('Jiloe', 'Java'));