const Funcionario = require("./Funcionario");

class Gerente extends Funcionario{
    constructor(nome, salario){
        super(nome, salario)
    }

    calcularBonus(){
        console.log(`Salário: ${this.salario}`)
        this.salario = this.salario * 1.4;
        console.log(`Salário: ${this.salario}`)
    }
}

module.exports = Gerente