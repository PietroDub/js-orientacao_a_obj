class Navegador{
    #paginas = []
    #tamanho = 0;

    visitar(url){
        this.#paginas[this.#tamanho] = url;
        this.#tamanho++;
    }
    voltar(){
        delete this.#paginas[this.#tamanho - 1];
        this.#tamanho--;
    }
    paginaAtual(){
        const topo = this.#paginas[this.#tamanho - 1];
        return topo;
    }
    historico(){
        console.table(this.#paginas);
    }
}

module.exports = Navegador;