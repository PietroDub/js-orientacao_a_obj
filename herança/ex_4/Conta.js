class Conta{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(deposito){
        this.saldo += deposito;
    }

    sacar(saque){
        this.saldo -= saque;
    }
}

module.exports = Conta;