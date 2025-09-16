const Atendimento = require("./fila");

const fila1 = new Atendimento();
fila1.enqueue('Pedro');
fila1.enqueue('Anna');
fila1.enqueue('Diório');
fila1.dequeue();

