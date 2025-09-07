const ContaCorrente = require("./ContaCorrente");

let conta1 = new ContaCorrente(100); // saldo inicial
conta1.depositar(50);
console.log("Saldo:", conta1.getSaldo()); // 150

conta1.sacar(30);
console.log("Saldo:", conta1.getSaldo()); // 120

conta1.sacar(200); // Saldo insuficiente!
