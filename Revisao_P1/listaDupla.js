// Nó da lista
class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // aponta para o próximo
        this.prev = null; // aponta para o anterior
    }
}

// Lista duplamente encadeada
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Inserir no fim
    insertAtEnd(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Inserir no início
    insertAtBeginning(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Remover do fim
    removeFromEnd() {
        if (!this.tail) return null;

        const value = this.tail.value;
        this.tail = this.tail.prev;

        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null; // lista ficou vazia
        }

        return value;
    }

    // Remover do início
    removeFromBeginning() {
        if (!this.head) return null;

        const value = this.head.value;
        this.head = this.head.next;

        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null; // lista ficou vazia
        }

        return value;
    }

    // Mostrar do início ao fim
    printForward() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " <-> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    // Mostrar do fim ao início
    printBackward() {
        let current = this.tail;
        let result = "";
        while (current) {
            result += current.value + " <-> ";
            current = current.prev;
        }
        console.log(result + "null");
    }
}

// --------------------------------------------------
// Testando a lista
const lista = new DoublyLinkedList();

lista.insertAtEnd(10);
lista.insertAtEnd(20);
lista.insertAtEnd(30);

console.log("Percorrendo do início ao fim:");
lista.printForward();   // 10 <-> 20 <-> 30 <-> null

console.log("Percorrendo do fim ao início:");
lista.printBackward();  // 30 <-> 20 <-> 10 <-> null

lista.insertAtBeginning(5);
lista.printForward();   // 5 <-> 10 <-> 20 <-> 30 <-> null

console.log("Removido do início:", lista.removeFromBeginning()); // 5
console.log("Removido do fim:", lista.removeFromEnd());          // 30

lista.printForward();   // 10 <-> 20 <-> null
