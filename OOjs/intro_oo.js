//Herança de Protótipo
const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
      console.log(this.nome, this.email);
    }
   }

const admin = {
    nome: 'Mariaj',
    email: 'j@jui.com',
    nascimento: '2024-01-01',
    role: 'admin',
    ativo: true,
    criarCurso: function() {
        console.log('Curso criado')
    }
}

//configura que admin vai usar "user" como modelo
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();

//new

function User (nome, email) {
  this.nome = nome;
  this.email = email;
  this.exibirInfos = function() {
    return `${this.nome}, ${this.email}`;
  }
}
 const novoUser = new User('Mitsy', 'mimi@mimi.com');
 console.log(novoUser.exibirInfos());