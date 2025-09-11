const Principal = require("./Principal");

class Aluno extends Principal{
    constructor(matricula, email){
        super()
        this.matricula = matricula;
        this.email = email;
    }

    apresentar(){
        console.log(`Bem vindo ${this.nome}`)
    }
}

module.exports = Aluno;