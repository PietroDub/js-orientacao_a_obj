const Atendimento = require("./fila");

const fila1 = new Atendimento();
fila1.enqueue('Pedro');
fila1.enqueue('Anna');
fila1.enqueue('Diório');
async function atendendo() {
        fila1.dequeue();
}
setTimeout(atendendo, 2000);
setTimeout(atendendo, 4000);
setTimeout(atendendo, 1000);

