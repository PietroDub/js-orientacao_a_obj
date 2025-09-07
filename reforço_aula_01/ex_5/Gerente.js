const Funcionario = require("./Funcionario");

class Gerente extends Funcionario{
    constructor(nome, salario){
        super(nome, salario);
    }        
    calcularBonus(){
        let bonus = 1.2;
        let salarioFim = this.salario * bonus;
        console.log(`O salário final é: ${salarioFim}`)
    }
}

module.exports = Gerente;