const Animal = require("./Animal");

class Gato extends Animal{
    constructor(nome, idade){
        super(nome, idade)
    }

    emitirsom(){
        console.log("Miau Miau!");
    }
}

module.exports = Gato;