class Pilha {
      #tamanho = 0;

    estaVazia() {
        if(this.#tamanho === 0) {
            return true;
        } else {
            return false;
        }
    }

    estaVazia2() {
        if(this.#tamanho === 0)
            return true;
        else
            return false;
    }

    estaVazia3() {
        return (this.#tamanho === 0);
    }

    estaVazia4 = () => (this.#tamanho === 0);
    
} // fecha classe

const t = () => console.log("Oi Tiago");

function t() {
    return console.log("Oi Tiago");
}
