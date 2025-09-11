const Funcionario = require("./Funcionario");

class Estagiario extends Funcionario{
    constructor(nome, salario){
        super(nome, salario)
    }

    calcularBonus(){
        console.log(`Salário: ${this.salario}`)
        this.salario = this.salario * 1.2;
        console.log(`Salário: ${this.salario}`)
    }
}
module.exports = Estagiario;