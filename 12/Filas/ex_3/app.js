const Brinquedo = require("./Brinquedo");

const brinquedo1 = new Brinquedo();

async function embarcando(pessoa) {
    brinquedo1.embarque(pessoa);
}
setTimeout(embarcando, 2000, 'Anna');
setTimeout(embarcando, 4000, 'Pedro');
brinquedo1.desembarque();