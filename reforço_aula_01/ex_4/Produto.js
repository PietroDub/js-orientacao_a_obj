class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

      aplicarDesconto(percentual) {
        let desconto = this.preco * (percentual / 100);
        let novoPreco = this.preco - desconto;
        console.log(`Preço original: R$${this.preco}`);
        console.log(`Desconto de ${percentual}%: -R$${desconto}`);
        console.log(`Preço com desconto: R$${novoPreco}`);
        return novoPreco;
    }
}

module.exports = Produto;