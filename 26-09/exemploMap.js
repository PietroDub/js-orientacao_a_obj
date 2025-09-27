const mapa = new Map();
mapa.set("nome", "carlos");
mapa.set("numero", 42);

//Acesso
console.log(mapa.get("nome"));
console.log(mapa.get(42));

// Iteração
for (const [chave, valor] of mapa){
    console.log(`${chave}: ${valor}`);
}