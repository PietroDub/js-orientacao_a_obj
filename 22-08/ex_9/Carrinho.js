class Carrinho {
    constructor(listaProduto = []) {
        this.listaProduto = listaProduto;
    }

    total() {
        let totalsoma = 0;
        for (let produto of this.listaProduto) {
            totalsoma += produto.preco;
        }
        return totalsoma;
    }
}

module.exports = Carrinho;
