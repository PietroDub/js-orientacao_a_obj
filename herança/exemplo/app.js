const Carro = require("./Carro");
const Moto = require("../Moto");

// Testando
let carro1 = new Carro("Toyota", "Corolla", 2020, 4);
carro1.ligar();   // herdado de Veiculo
carro1.buzinar(); // específico de Carro

let moto1 = new Moto("Honda", "CB500", 2019);
moto1.ligar();    // herdado de Veiculo
moto1.empinar();  // específico de Moto