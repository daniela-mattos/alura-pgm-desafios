import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Mitsy", "m@m.com", "2009-05-12");
console.log(novoUser.exibirInfos());

//estando como privado na classe, o node não consegue acessar ou mudar o dado
// novoUser.#nome = "Marcia";
// console.log(novoUser.exibirInfos());
// console.log(novoUser.#nome);