const Dev = require('./Desenvolvedor')
const Funcionario = require('./Funcionario')
const Gerente = require('./Gerente')

let Dev_1 = new Dev('Pedro', 10000);
Dev_1.calcularBonus();

let Func_1 = new Funcionario('João', 5000);
Func_1.calcularBonus();

let Ger_1 = new Gerente('Robert', 9000);
Ger_1.calcularBonus();