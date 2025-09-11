const Animal = require("./Animal")

class Cachorro extends Animal{
    constructor(nome, idade){
        super(nome, idade)
    }

    emitirsom(){
        console.log('AU AU');
    }
}

module.exports = Cachorro