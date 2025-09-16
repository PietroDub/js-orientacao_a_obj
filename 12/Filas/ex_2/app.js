const Impressao = require("./Impressao");

const fila1 = new Impressao();
fila1.enqueue('documento1');
fila1.enqueue('documento2');
fila1.enqueue('documento3');
fila1.enqueue('documento4');
fila1.enqueue('documento5');

//é para dar erro!
fila1.enqueue('documento6');
fila1.enqueue('documento6');

fila1.dequeue();