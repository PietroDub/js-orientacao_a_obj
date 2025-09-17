const Restaurante = require("./Restaurante");

const fila = new Restaurante;
fila.enqueue('pedido 1');
fila.enqueue('pedido 2');
fila.enqueue('pedido 3');

async function preparo() {
    fila.dequeue();
}
setTimeout(preparo, 2000);
setTimeout(preparo, 4000);
setTimeout(preparo, 1000);