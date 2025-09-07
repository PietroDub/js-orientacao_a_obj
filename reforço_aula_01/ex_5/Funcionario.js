class Funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }

    calcularBonus(){
        let bonus = 0;
        let salarioFim = this.salario * bonus;
                console.log(`O salário final é: ${salarioFim}`)
    }
}

module.exports = Funcionario;