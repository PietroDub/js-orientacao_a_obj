class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    mostrarPreco(){
        console.log(`R$${this.preco}`)
    }

    aplicarDesconto(percentual){
        this.preco = this.preco - ((percentual / 100) * this.preco)
        console.log(`Este é o preço final ${this.preco} após desconto de ${percentual}%`)
    }
}

module.exports = Produto;