const Fila = require("./exemplo");

const fila1 = new Fila();
fila1.estavazia();
fila1.enqueue('arroz');
fila1.enqueue('feijão')
fila1.front();
fila1.tamanho();
fila1.limpar();