const Pessoa = require("./Exercicio1");
const pessoa1 = new Pessoa("Pedro", 20);
const pessoa2 = new Pessoa("Robert", 10);

pessoa1.apresentar();
pessoa2.apresentar();

const Conta = require("./Exercicio2");
const conta1 = new Conta();
conta1.depositar(100);
conta1.getSaldo();
conta1.sacar(30);
conta1.getSaldo();

const Func = require("./Exercicio3");
const Gerent = require("./ex3-2");
const Estagiario = require("./Exercicio4");


const funcionario1 = new Func("Robery", 18000);
const gerente1 = new Gerent("Pietre", 500000);

funcionario1.calcularBonus();
gerente1.calcularBonus();

const funcionarios = [
    new Func("Pedro", 3000),
    new Gerent("Carla", 5000),
    new Estagiario("João", 1500)
];

function mostrarBonus(funcionari) {
    for (let f of funcionari) {
        console.log(`${f.nome} - Bônus: R$${f.calcularBonus()}`);
    }
}

mostrarBonus(funcionarios);

const Matematica = require("./Exercicio5");
const Pilha = require("./Exercicio6");
const LinkedList = require("./Exercicio7");
console.log(Matematica.somar(10, 50));
console.log(Matematica.subtrair(100, 50));
console.log(Matematica.dividir(100, 20));
console.log(Matematica.multiplicar(10, 4));


const pilha1 = new Pilha();
pilha1.adicionar("Arroz");
pilha1.adicionar("Sorvete");
pilha1.adicionar(null);
console.log(pilha1.remover());
console.log(pilha1.top());
pilha1.isEmpty();

const lista = new LinkedList();
lista.InsertAtEnd("Arroz");
lista.InsertAtEnd("Arcane");
lista.InsertAtEnd("Star Wars");

lista.ToString();

const Fila = require("./Exercicio9")
const fila = new Fila();

fila.enqueue("Cliente 1");
fila.enqueue("Cliente 2");
fila.enqueue("Cliente 3");

console.log("Próximo:", fila.front()); 
// Saída: Próximo: Cliente 1

console.log("Atendido:", fila.dequeue()); 
// Saída: Atendido: Cliente 1

console.log("Próximo:", fila.front()); 
// Saída: Próximo: Cliente 2
