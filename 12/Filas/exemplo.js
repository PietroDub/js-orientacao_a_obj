class Fila{
    #items = [];
    #inicio = 0;
    #fim = 0;

    enqueue(elemento) {
        this.#items[this.#fim] = elemento
        this.#fim++;
    };
    dequeue(){
       const first = this.#items[this.#inicio];
       delete this.#items[this.#inicio];
       this.#inicio++;

       //quando for vazio redefine a fila
       if(this.#inicio === this.#fim){
        this.#inicio = 0;
        this.#fim = 0;
       }

       return first;
    };
    front(){
        console.log(this.#items[this.#inicio]);
    };
    estavazia(){
        
    };
    tamanho(){
        let tamanho = this.#fim - this.#inicio
        console.log(`O tamanho é ${tamanho}`)
    };
    limpar(){

        this.#inicio = 0;
        this.#fim = 0;
    };
}

module.exports = Fila;