class Funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
    calcularBonus(){
        let bonus = this.salario / 10;
        console.log(`O bônus de 10% é de: R$${bonus}`);
    }
}
module.exports = Funcionario;