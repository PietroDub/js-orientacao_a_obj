const Caixa = require("./caixa");

const fila1 = new Caixa;
const fila2 = new Caixa;
const fila3 = new Caixa;

fila1.entrar('Pedro', 20);

async function atender(fila1) {
    fila1.dequeue()
}
setTimeout(atender, quantidade )