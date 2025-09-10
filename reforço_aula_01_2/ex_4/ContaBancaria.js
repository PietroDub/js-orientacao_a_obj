class ContaBancaria{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        if(this.saldo > valor){
            this.saldo -= valor;
        } else{
            console.log("ERRO! Saldo insuficiente.")
        }
    }
    verSaldo(){
        console.log(`Titular:${this.titular}, saldo:${this.saldo}`);
    }
}

module.exports = ContaBancaria;