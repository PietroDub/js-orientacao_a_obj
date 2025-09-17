const Caixa = require("./caixa");

const fila1 = new Caixa();

// adicionando clientes com diferentes quantidades de produtos
fila1.entrar("Pedro", 5);
fila1.entrar("Maria", 8);
fila1.entrar("João", 2);

async function atenderFila(fila) {
    while (!fila.vazia()) {
        const cliente = fila.dequeue();
        console.log(`Atendendo ${cliente.nome} com ${cliente.quantidade} produtos...`);
        await new Promise(resolve => setTimeout(resolve, cliente.quantidade * 500));
        console.log(`✅ ${cliente.nome} finalizou o atendimento!\n`);
    }
    console.log("🎉 Fila vazia, todos atendidos!");
}

atenderFila(fila1);