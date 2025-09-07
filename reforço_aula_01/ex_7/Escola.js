const Aluno = require("./Aluno")

class Escola{
    constructor(listaAluno = []){
        this.listaAluno = listaAluno;
    }

    adicionarAluno(nomeAluno, media){
        const aluno = new Aluno(nomeAluno, media)
        this.listaAluno.push(Aluno);
    }

    listarAlunos(){
        console.log(`Lista completa:`)
        for(let i = 0; i < this.listaAluno.length; i++){
            console.log(`${aluno.nomeAluno} - Média: ${aluno.media}`);
        }
    }

    mediaGeral(){
        let total = 0;
        for(let i = 0; i < this.listaAluno.length; i++){
            total += this.listaAluno[i].media;
        }
        total = total / this.listaAluno.length;
        console.log(`Media geral da escola:`)
    }
}

module.exports = Escola;