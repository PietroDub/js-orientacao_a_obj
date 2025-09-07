class ContaCorrente {
    // privado
    #saldo;

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    getSaldo() {
        return this.#saldo;
    }
}

module.exports = ContaCorrente;
