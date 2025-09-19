const Estagiario = require("./Estagiario");
const Funcionario = require("./Funcionario");
const Gerente = require("./Gerente");

const funcionario1 = new Funcionario('Luka', 2000);
const gerente1 = new Gerente('Munim', 100000);
const estagiario1 = new Estagiario('Skelly', 4000);

funcionario1.calcularBonus();
estagiario1.calcularBonus();
gerente1.calcularBonus();