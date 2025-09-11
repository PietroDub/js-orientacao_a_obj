class Animal{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    emitirsom(){
        console.log("emitindo som...")
    }
}

module.exports = Animal;