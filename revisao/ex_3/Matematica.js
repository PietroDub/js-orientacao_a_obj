class Matematica{
    static somar(a, b){
        return (a + b);
    }
    static subtrair(a, b){
       return (a - b);
    }

    static fatorial(n){
        let resultado = 1; // começa em 1, pois fatorial é multiplicação
        for (let i = n; i > 1; i--) {
            resultado *= i; // multiplica o acumulador pelo valor de i
        }
        return resultado;
    }
}
module.exports = Matematica;