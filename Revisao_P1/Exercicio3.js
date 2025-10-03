class Funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }

    calcularBonus(){
        let bonus = this.salario / 10;
        console.log(`Bonus: ${bonus}`);
    }

}
module.exports = Funcionario;

