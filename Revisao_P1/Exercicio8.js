const map = new Map();

map.set('P001',{ nome: "Arroz", preco: 20 });
map.set("P002", { nome: "Carne", preco: 80 });
map.set("P003", { nome: "Feijão", preco: 10 });

for (const [chave, valor] of map){
    console.log(`Código:${chave} Produto:${valor.nome} Preço: ${valor.preco}`);
}