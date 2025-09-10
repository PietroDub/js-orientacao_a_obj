class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    area(){
        let area = this.largura * this.altura;
        console.log(`a área do retângulo é: ${area}`)
    }

    perimetro(){
        let perimetro = (this.altura * 2) + (this.largura * 2)
        console.log(`O perímetro do retângulo é:${perimetro}`)
    }
}

module.exports = Retangulo;