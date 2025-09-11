class Funcionario{
    constructor(nome, salario){
        this.nome =  nome;
        this.salario = salario;
    }
    calcularBonus(){
        this.salario = this.salario * 1.1;
    }
}

module.exports = Funcionario