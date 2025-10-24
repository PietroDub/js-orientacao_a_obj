class Pilha{

    #elementos = [];
    #tamanho = 0;

    adicionar(elemento){
        this.#elementos[this.#tamanho] = elemento;
        this.#tamanho++;
    }
    remover(){
        const topo = this.#elementos[this.#tamanho - 1];
        delete this.#elementos[this.#tamanho - 1];
        this.#tamanho--;
        return topo; 
    }
    verTopo(){
        const topo = this.#elementos[this.#tamanho - 1];
        return topo;
    }
    verificar(){
        console.table(this.#elementos);
    }

    search(valor){
         for (let i = this.#tamanho - 1; i >= 0; i--) {
        if (this.#elementos[i] === valor) {
            return this.#elementos[i]; // valor encontrado
        }
    }
    return null; // não encontrado
    }
}

module.exports = Pilha;