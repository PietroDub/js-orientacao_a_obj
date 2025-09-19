const Funcionario = require("./Funcionario");

class Estagiario extends Funcionario{
    constructor(nome,salario){
        super(nome, salario);
    }

    calcularBonus(){
        let bonus = this.salario / 20;
        console.log(`O bonus de 5% será de R$${bonus}`);
    }
}

module.exports = Estagiario;