class ContaBancaria{
    #_saldo;

    depositar(valor){
       this.#_saldo += valor;
       console.log(this.#_saldo)
    }

    sacar(valor){
        this.#_saldo -= valor;
        console.log(this.#_saldo)
    }

    verSaldo(){
        console.log(`Seu saldo é: ${this.#_saldo}`)
        console.log(this.#_saldo)
    }

    Number(parametro){
        this.Number = parseFloat(parametro);
    }
}

 module.exports = ContaBancaria;