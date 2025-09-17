const Restaurante = require("./Restaurante");

const fila = new Restaurante;
fila.enqueue('pedido 1');
fila.enqueue('pedido 2');
fila.enqueue('pedido 3');

fila.dequeue();