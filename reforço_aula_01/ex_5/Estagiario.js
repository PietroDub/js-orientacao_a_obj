const Funcionario = require("./Funcionario");

class Estagiario extends Funcionario{
    calcularBonus(){
        let bonus = 1.1;
        let salarioFim = this.salario * bonus;
        console.log(`O salário final é: ${salarioFim}`)
    }
}
module.exports = Estagiario;