// Importa a classe Fila do arquivo Fila.js
const Fila = require('./Fila.js'); 

// Criamos uma nova fila de atendimento
const teste = new Fila();
teste.enqueue('A');
teste.enqueue('B');
teste.enqueue('C');
teste.enqueue('D');
console.log("---------------------------------");
teste.dequeue();