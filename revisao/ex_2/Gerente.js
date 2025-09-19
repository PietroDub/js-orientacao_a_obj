const Funcionario = require("./Funcionario");

class Gerente extends Funcionario{
    constructor(nome, salario){
        super(nome, salario);
    }

    calcularBonus(){
        let bonus = this.salario / 5;
        console.log(`O bonus de 20% será de R$${bonus}`)
    }
}

module.exports = Gerente;