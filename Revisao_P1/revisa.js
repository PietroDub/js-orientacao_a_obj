// 📘 Programação Orientada a Objetos em JavaScript
// Este guia resume os principais conceitos de POO em JS.

// --------------------------------------------------
// 🔹 1. O que é POO?
// POO é um paradigma baseado em objetos:
// - Atributos (propriedades): características
// - Métodos: comportamentos

// --------------------------------------------------
// 🔹 2. Criando Classes e Objetos
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const p1 = new Pessoa("Ana", 25);
p1.apresentar();

// --------------------------------------------------
// 🔹 3. Encapsulamento
// Controla o acesso aos atributos de uma classe.

class Produto {
    constructor(nome, preco) {
        this.nome = nome;   // público
        this.preco = preco; // público
    }
}

// Privado
class Conta {
    #saldo = 0;

    depositar(valor) {
        this.#saldo += valor;
    }

    getSaldo() {
        return this.#saldo;
    }
}

// --------------------------------------------------
// 🔹 4. Herança
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularBonus() {
        return this.salario * 0.1;
    }
}

class Gerente extends Funcionario {
    calcularBonus() {
        return this.salario * 0.2;
    }
}

const g1 = new Gerente("Carlos", 5000);
console.log(g1.calcularBonus()); // 1000

// --------------------------------------------------
// 🔹 5. Polimorfismo
// Capacidade de sobrescrever métodos da classe pai.
// Exemplo: Gerente, Estagiário e Funcionário
// todos usam calcularBonus(), mas com regras diferentes.

// --------------------------------------------------
// 🔹 6. Métodos Estáticos
class Matematica {
    static somar(a, b) {
        return a + b;
    }
}

console.log(Matematica.somar(5, 3)); // 8

// --------------------------------------------------
// 🔹 7. Abstração
class Animal {
    falar() {
        console.log("Som genérico");
    }
}

class Cachorro extends Animal {
    falar() {
        console.log("Latindo 🐶");
    }
}

const dog = new Cachorro();
dog.falar();

// --------------------------------------------------
// ==================================================
// 🔹 8. Trabalhando com Coleções (Map e Set)
// ==================================================

// 👉 MAP: é como um "dicionário", onde você armazena pares chave → valor.
// Diferente de objetos, a chave pode ser qualquer tipo de dado (string, número, objeto).

const produtos = new Map();

// Adicionando valores
produtos.set("P001", { nome: "Arroz", preco: 20 });
produtos.set("P002", { nome: "Carne", preco: 80 });
produtos.set("P003", { nome: "Feijão", preco: 10 });

// Acessando por chave
console.log(produtos.get("P001")); // { nome: "Arroz", preco: 20 }

// Verificando se existe
console.log(produtos.has("P003")); // true

// Removendo
produtos.delete("P002");

// Percorrendo
for (let [codigo, dados] of produtos) {
    console.log(`${codigo} → ${dados.nome} custa R$${dados.preco}`);
}

// 👉 SET: é como uma lista que não permite valores repetidos.
const conjunto = new Set([1, 2, 3, 3, 2]);

console.log(conjunto); // Set { 1, 2, 3 }

// Adicionando
conjunto.add(4);
conjunto.add(2); // não entra porque já existe

// Verificando
console.log(conjunto.has(3)); // true

// Removendo
conjunto.delete(1);

// Iterando
for (let valor of conjunto) {
    console.log(valor);
}

// ==================================================
// 🔹 9. Estruturas com Classes
// ==================================================

// 👉 PILHA (Stack) → LIFO (Last In, First Out)
// Pense numa pilha de pratos: o último a entrar é o primeiro a sair.
class Feitico{

    #feiticos = [];
    #tamanho = 0;

    adicionar(elemento){
        this.#feiticos[this.#tamanho] = elemento;
        this.#tamanho++;
    }
    remover(){
        const topo = this.#feiticos[this.#tamanho - 1];
        delete this.#feiticos[this.#tamanho - 1];
        this.#tamanho--;
        return topo; 
    }
    verTopo(){
        const topo = this.#feiticos[this.#tamanho - 1];
        return topo;
    }
    verificar(){
        console.table(this.#feiticos);
    }
}

const minha_pilha = new  Feitico();

minha_pilha.adicionar('Harry potter');
minha_pilha.adicionar('Lumine');

console.log(minha_pilha.verTopo());
console.log(minha_pilha.remover());
minha_pilha.verificar();

// 👉 FILA (Queue) → FIFO (First In, First Out)
// Pense numa fila de supermercado: o primeiro a entrar é o primeiro a sair.
class Fila {
    constructor() {
        this.itens = [];
    }
    enqueue(valor) {
        this.itens.push(valor);
    }
    dequeue() {
        return this.itens.shift();
    }
    front() {
        return this.itens[0];
    }
    isEmpty() {
        return this.itens.length === 0;
    }
}

// Testando a fila
const fila = new Fila();
fila.enqueue("Cliente 1");
fila.enqueue("Cliente 2");
console.log(fila.front()); // Cliente 1
console.log(fila.dequeue()); // sai Cliente 1
console.log(fila.dequeue()); // sai Cliente 2

// 👉 LISTA ENCADEADA
// É como uma corrente de nós, onde cada nó aponta para o próximo.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // ponteiro para o próximo
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

// Testando a lista encadeada
const lista = new LinkedList();
lista.insertAtEnd(10);
lista.insertAtEnd(20);
lista.insertAtEnd(30);
lista.print(); // 10 -> 20 -> 30 -> null

// ==================================================
// 🔹 10. Dicionários
// ==================================================

// 👉 Usando OBJETO como dicionário
const dicionario = {
    P001: { nome: "Arroz", preco: 25 },
    P002: { nome: "Queijo", preco: 60 }
};

// Acesso direto
console.log(dicionario.P001.nome); // Arroz

// Iterando
for (let codigo in dicionario) {
    console.log(`${codigo} - ${dicionario[codigo].nome}`);
}

// 👉 Usando MAP como dicionário (mais flexível que objeto)
const dicionarioMap = new Map();
dicionarioMap.set("P001", { nome: "Arroz", preco: 25 });
dicionarioMap.set("P002", { nome: "Queijo", preco: 60 });

for (let [codigo, produto] of dicionarioMap) {
    console.log(`${codigo} - ${produto.nome}`);
}
// --------------------------------------------------
// 🔹 11. Tratamento de Exceções
try {
    throw new Error("Algo deu errado!");
} catch (erro) {
    console.log("Erro capturado:", erro.message);
} finally {
    console.log("Sempre executa!");
}

// --------------------------------------------------
// 📌 Conclusão
// - Criar classes e objetos
// - Encapsulamento (público/privado)
// - Herança e polimorfismo
// - Métodos estáticos
// - Estruturas de dados (pilhas, filas, listas encadeadas)
// - Dicionários (Object e Map)
// - Tratamento de exceções
