class Feitico{

    #feiticos = [];
    #tamanho = 0;

    adicionar(elemento){
        this.#feiticos[this.#tamanho] = elemento;
        this.#tamanho++;
    }
    remover(){
        const topo = this.#feiticos[this.#tamanho - 1];
        delete this.#feiticos[this.#tamanho - 1];
        this.#tamanho--;
        return topo; 
    }
    verTopo(){
        const topo = this.#feiticos[this.#tamanho - 1];
        return topo;
    }
    verificar(){
        console.table(this.#feiticos);
    }
}

module.exports = Feitico;