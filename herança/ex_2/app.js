const Estagiario = require('./estagiario');
const Gerente = require('./gerente');

let estagiario1 = new Estagiario('Paulo', 2000);
let gerente1 = new Gerente('Lucas', 8000);

estagiario1.calcularBonus();
gerente1.calcularBonus();