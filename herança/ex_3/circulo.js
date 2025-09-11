const Forma = require("./Forma");

class Circulo extends Forma{
    constructor(raio){
        super();
        this.raio = raio;
    }

    area(){
        let area = Math.PI * (this.raio * this.raio)
        console.log(`A área do círculo é: ${area}`)
    }
}

module.exports = Circulo;