class Gerente{
    constructor(nome, salario){
        this.nome = nome
        this.salario = salario;
    }

calcularBonus() {
    console.log("Salário atual:", this.salario);
    let newsalario = this.salario * 1.20;
    console.log("Salário com bônus:", newsalario);
}
}

module.exports = Gerente;