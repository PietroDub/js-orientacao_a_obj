const Carro = require("./Veiculos");
const Moto = require("./Veiculos");

const Carro_1 = new Carro("Bugatti", 1990, 170);
const Moto_1 = new Moto("Kawasak", 1999, 145);

Carro_1.acelerar();
Moto_1.acelerar();

console.log(Carro_1.velocidade);
console.log(Moto_1.velocidade);