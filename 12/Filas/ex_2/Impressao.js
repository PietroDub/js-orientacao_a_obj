class Impressao{
    #documentos = [];
    #inicio = 0;
    #fim = 0;

    enqueue(documento){
       let tamanho = this.#fim - this.#inicio;
       if(tamanho < 5){
        this.#documentos[this.#fim] = documento;
        this.#fim++;
       } else{
        console.log('A fila está cheia!')
       }
    }
    dequeue(){
        let documento = this.#documentos[this.#inicio]
        delete this.#documentos[this.#inicio];
        console.log(`O elemento ${documento} foi impresso`)
    }
}

module.exports = Impressao;