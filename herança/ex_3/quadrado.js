const Forma = require("./Forma");

class Quadrado extends Forma{
    constructor(lado){
        super();
        this.lado = lado
    }

    area(){
        let area = this.lado * this.lado
        console.log(`A área do quadrado é: ${area}`)
    }
}

module.exports = Quadrado;