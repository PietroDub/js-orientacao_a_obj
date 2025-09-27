const Biblioteca = {
    "P001": { nome: "Arroz", preco: 25 },
    "P002": { nome: "Feijão", preco: 15 },
    "P003": { nome: "Carne", preco: 80 }
}

for (let codigo in Biblioteca) {
    let produto = Biblioteca[codigo];
    if (produto.preco > 50) {
        console.log(`${codigo} - ${produto.nome}: R$${produto.preco}`);
    }
}