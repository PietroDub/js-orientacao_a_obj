class MeuArray{

    constructor(){
        this.items = [];
        this.tamanho = 0;
    }

    adicionar(elemento){
        this.items[this.tamanho] = elemento;
        this.tamanho++;
    }

    remover() {
        if (this.tamanho === 0){
            return undefined
        }

        //pega o último item
        const ultimoItem = this.items[this.tamanho - 1];
        
        //remove o último item
        delete this.items[this.tamanho - 1];
        
        //diminui o array
        this.tamanho--;

        return ultimoItem //item removido
    }

    obterElemento(indice) {
        if(indice < 0 || indice >= this.tamanho){
            //se for fora do alcance
            return undefined;
        }
            //retorna o item da posicao
            return this.items[indice];
    }

    tamanhoArray(){
        return this.tamanho;
    }

    limpar() {
        this.items = [];
        this.tamanho = 0;
    }
};

module.exports = MeuArray;