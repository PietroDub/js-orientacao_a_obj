class Pilha{
    #pilha = [];
    #tamanho = 0;

    adicionar(elemento){
        this.#pilha[this.#tamanho] = elemento;
        this.#tamanho++;
    }

    remover(){
        let topo = this.#pilha[this.#tamanho - 1];
        delete this.#pilha[this.#tamanho - 1];
        this.#tamanho--;
        return topo;
    }

    top(){
        let topo = this.#pilha[this.#tamanho - 1];
        return topo;
    }

    isEmpty(){
        let i = this.#pilha[this.#tamanho - 1];
        for(i in this.#pilha){
            if(this.#pilha[i] === null || this.#pilha[i] === undefined){
                console.log(`A posição ${i} está vazia!`);
            }
            i--;
        }
    }
}

module.exports = Pilha;