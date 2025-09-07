const Aluno = require("./Aluno");

let aluno1 = new Aluno("Pedro", [8, 7, 9]);
let aluno2 = new Aluno("Maria", [5, 6, 4]);

console.log(`${aluno1.nome} - Média: ${aluno1.media()} - ${aluno1.situacao()}`);
console.log(`${aluno2.nome} - Média: ${aluno2.media()} - ${aluno2.situacao()}`);
