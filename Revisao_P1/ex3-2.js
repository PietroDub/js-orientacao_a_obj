const Funcionario = require("./Exercicio3");

class Gerente extends Funcionario{
    constructor(nome,salario){
        super(nome,salario)
    }
    calcularBonus(){
        let bonus = this.salario / 5;
        console.log(`Bonus: ${bonus}`);
    }
}

module.exports = Gerente;