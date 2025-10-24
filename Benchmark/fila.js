class Fila{
    #clientes = [];
    #incio = 0;
    #fim = 0;

   enqueue(cliente) {
    this.#clientes.push(cliente);
}

dequeue() {
    const atendido = this.#clientes.shift();
    console.log(`Cliente ${atendido} atendido`);
    return atendido;
}

search(valor) {
    return this.#clientes.includes(valor);
}

 back() {
    // Se a fila estiver vazia, retorna undefined
    if (this.estaVazia()) {
      return undefined;
    }

    // Retorna o primeiro elemento
    return this.#clientes[this.#fim];
  }

   // Verifica se a fila está vazia
  // Verifica se os índices estão iguais com arrow function
  estaVazia = () => this.#fim === this.#incio;

}
module.exports = Fila;