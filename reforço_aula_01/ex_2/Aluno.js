class Aluno{
    constructor(nome, notas = []){
        this.nome = nome;
        this.notas = notas;
    }
    
    media(){
        let soma = 0;
        for (let nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length; 
    }

    situacao(){
        if(this.media() >= 7){
            return ("Aprovado");
        } else {
            return ("Reprovado")
        }
    }
}

module.exports = Aluno;