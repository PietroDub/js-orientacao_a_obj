
// Importando as classes necessárias para o benchmark
const Meuarray = require('./array.js');
const BinaryTree = require('./bynarytree.js');
const LinkedList = require('./linked_list.js');
const DoublyLinkedList = require('./doubly_linked_list.js');
const Fila = require('./fila.js');
const Pilha = require('./plha.js');
const Avl = require('./AVL_bynarytree.js');


// Instanciando as classes
const avl = new Avl();
const arras = new Meuarray();
const tree = new BinaryTree();
const list = new LinkedList();
const doublyList = new DoublyLinkedList();
const queue = new Fila();
const stack = new Pilha();

// Função para gerar um número inteiro aleatório dentro de um intervalo
function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tamanho do teste
const size = 10000000;

console.time("timerAVL")
for(let i = 0; i < size; i++){
    avl._insert(getRandomIntRange(i, size));
}
console.timeEnd("timerAVL")

console.time("timerArray")
for(let i = 0; i < size; i++){
    arras.adicionar(getRandomIntRange(i, size));
}
console.timeEnd("timerArray")

// Testando a Fila
console.time("timerFila");
for (let i = 0; i < size; i++) 
{
    queue.enqueue(getRandomIntRange(i, size));
}
console.timeEnd("timerFila");

// Testando a Pilha
console.time("timerPilha");
for (let i = 0; i < size; i++) 
{
    stack.adicionar(getRandomIntRange(i, size));
}
console.timeEnd("timerPilha");

// Testando a LinkedList
console.time("timerLinkedList");
for (let i = 0; i < size; i++) 
{
    list.insertAtBeggining(getRandomIntRange(i, size));
}
console.timeEnd("timerLinkedList");


// Testando a DoublyLinkedList
console.time("timerDoublyLinkedList");
for (let i = 0; i < size; i++) 
{
    doublyList.append(getRandomIntRange(i, size));
}
console.timeEnd("timerDoublyLinkedList");


// Testando a BinaryTree
console.time("timerBinaryTree");
for (let i = 0; i < size; i++) 
{
    tree.insert(getRandomIntRange(i, size));
}
console.timeEnd("timerBinaryTree");

// PESQUISANDO

// ====== TESTE DE BUSCA ======
const lastValue = size - 1

console.time("timerSearchAVL");
for (let i = 0; i < size; i++) {
    avl.search(lastValue);
}
console.timeEnd("timerSearchAVL");

console.time("timerSearchArray");
for (let i = 0; i < size; i++) {
    arras.obterElemento(lastValue); // ou .search() / .find() dependendo da sua classe
}
console.timeEnd("timerSearchArray");

console.time("timerSearchFila");
for (let i = 0; i < size; i++) {
    queue.back(lastValue);
}
console.timeEnd("timerSearchFila");

console.time("timerSearchPilha");
for (let i = 0; i < size; i++) {
    stack.search(lastValue);
}
console.timeEnd("timerSearchPilha");

console.time("timerSearchLinkedList");
for (let i = 0; i < size; i++) {
    list.find(lastValue);
}
console.timeEnd("timerSearchLinkedList");

console.time("timerSearchDoublyLinkedList");
for (let i = 0; i < size; i++) {
    doublyList.find(lastValue);
}
console.timeEnd("timerSearchDoublyLinkedList");

console.time("timerSearchBinaryTree");
for (let i = 0; i < size; i++) {
    tree.search(lastValue);
}
console.timeEnd("timerSearchBinaryTree");