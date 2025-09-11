const Veiculo = require("../Veiculo");

// Classe filha (Carro) que herda de Veiculo
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano); // chama o construtor da classe pai
        this.portas = portas;
    }

    buzinar() {
        console.log("Biiiiiiiiip 🚗");
    }
}

module.exports = Carro