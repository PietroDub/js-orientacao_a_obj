const ContaBancaria = require("./Conta_Bancaria");

const Conta1 = new ContaBancaria();

Conta1.depositar(100);
Conta1.sacar(50);
Conta1.verSaldo();