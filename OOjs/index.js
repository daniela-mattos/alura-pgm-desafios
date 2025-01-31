import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoAdmin = new Admin("Mitsy", "m@m.com", "2009-05-12");
console.log(novoAdmin.nome);
console.log(novoAdmin.exibirInfos());

//estando como privado na classe, o node não consegue acessar ou mudar o dado

const novoUser = new User('Arty', 'rt@er.uk', 2025-1-1);
console.log(novoUser.exibirInfos());

novoUser.nome = "Urthe";
console.log(novoUser.nome);

const novoDocente = new Docente("Aert", "pp@m.com", "2009-05-12");
console.log(novoDocente.exibirInfos());

console.log("Dados genéricos: ")
const dadosFicticios = User.exibirInfosGenericas('Ceytp', 'er@io.com');
console.log(dadosFicticios);