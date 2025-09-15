class EditorTexto{
    #textos = [];
    #tamanho = 0;

    digitar(texto){
        this.#textos[this.#tamanho] = texto;
        this.#tamanho++;
    }
    desfazer(){
        const topo = this.#textos[this.#tamanho - 1];
        delete this.#textos[this.#tamanho - 1];
        this.#tamanho--;
        return topo;
    }
    mostrarTexto(){
        const topo = this.#textos[this.#tamanho - 1];
        return topo;
    }
    vazio(){
        console.table(this.#textos)
    }
}

module.exports = EditorTexto;