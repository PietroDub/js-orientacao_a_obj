class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descricao(){
        console.log(`Carro: ${this.marca}, ${this.modelo} (${this.ano})`)
    }

    eAntigo(){
        if((2025 - this.ano) > 20){
            return true
        } else{
           return false
        }
    }
}

module.exports = Carro;