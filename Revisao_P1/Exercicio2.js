class ContaBancaria{
    #saldo = 0;
    depositar(valor){
        this.#saldo += valor;
    }
    sacar(valor){
        this.#saldo -= valor;
    }
    getSaldo(){
        console.log(`Saldo Atual:${this.#saldo}`);
    }
}

module.exports = ContaBancaria;