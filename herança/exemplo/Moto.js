const Veiculo = require("./Veiculo");

// Outra classe filha (Moto)
class Moto extends Veiculo {
    constructor(marca, modelo, ano){
        super(marca, modelo, ano)
    }
    empinar() {
        console.log(`${this.marca} ${this.modelo} está empinando 🏍️`);
    }
}

module.exports = Moto