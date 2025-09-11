// Classe base (pai)
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar() {
        console.log(`${this.marca} ${this.modelo} está ligado!`);
    }

    desligar() {
        console.log(`${this.marca} ${this.modelo} foi desligado.`);
    }
}

module.exports = Veiculo;