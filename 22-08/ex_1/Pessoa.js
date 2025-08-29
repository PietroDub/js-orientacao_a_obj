class Pessoa{
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        console.log(`meu nome é: ${this.nome} e eu tenho ${this.idade} anos`);
    }
};
module.exports = Pessoa;