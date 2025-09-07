class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    area(){
        return console.log(this.largura * this.altura)
    }

    perimetro(){
        return console.log((this.altura * 2) + (this.largura));
    }
}

module.exports = Retangulo;