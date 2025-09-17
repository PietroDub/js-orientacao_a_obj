class Brinquedo{
    #fila = [];
    #inicio = 0;
    #fim = 0;

    embarque(pessoa, vip){
        this.#fila[this.#fim] = pessoa;
        console.log(`${pessoa} entrou na fila!`);
        this.#fim++;
    }
    desembarque(){
       const embarcou = this.#fila[this.#inicio];
       delete this.#fila[this.#inicio];
       this.#inicio++;
       return embarcou;
    }
    tamanho(){
        let tamanho = this.#fim - this.#inicio
        console.log(`O tamanho é ${tamanho}`)
    };
}
module.exports = Brinquedo;