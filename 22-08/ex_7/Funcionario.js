class Funcionario{
    constructor(nome, salario){
        this.nome = nome
        this.salario = salario;
    }

calcularBonus() {
    console.log("Salário atual:", this.salario);
    let newsalario = this.salario * 1.10;
    console.log("Salário com bônus:", newsalario);
}
}

module.exports = Funcionario;