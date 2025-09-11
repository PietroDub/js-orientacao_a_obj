const Conta = require("./Conta");

class Corrente extends Conta{
    constructor(titular, saldo){
        super(titular,saldo)
    }

    depositar(deposito){
        this.saldo += deposito;
    }

    sacar(saque){
        this.saldo -= 1;
        this.saldo -= saque;
    }
}

module.exports = Corrente;