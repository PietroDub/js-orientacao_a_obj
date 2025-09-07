const Aluno = require("./Aluno");
const Escola = require("./Escola");

let aluno1 = new Aluno("Pedro", 10);
let aluno2 = new Aluno("Roberta", 6);
const escola1 = new Escola([aluno1, aluno2])

escola1.adicionarAluno("Hornet", 8);
escola1.listarAlunos();
escola1.mediaGeral();