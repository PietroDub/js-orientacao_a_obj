const Funcionario = require("./Exercicio3");

class Estagiario extends Funcionario{
    constructor(nome,salario){
        super(nome,salario);
    }
    calcularBonus(){
        let bonus = this.salario /20;
        console.log(`Bonus: ${bonus}`);
    }
}

module.exports = Estagiario;