class ContaBancaria{
    #_saldo = 0; // começa em zero

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
    }

    Number(parametro){
        this.Number = parseFloat(parametro);
    }
}

 module.exports = ContaBancaria;