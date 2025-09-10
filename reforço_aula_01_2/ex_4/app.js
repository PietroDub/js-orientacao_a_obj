const ContaBancaria = require('./ContaBancaria')

let conta_1 = new ContaBancaria('Tobias', 100);
conta_1.verSaldo();
conta_1.depositar(60);
conta_1.verSaldo();
conta_1.sacar(200);
conta_1.sacar(20);
conta_1.verSaldo();