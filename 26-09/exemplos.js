const apiResponse = {
    status: "success",
    data: {
        id: 1,
        nome: "Produto A",
        preco: 100
    }
};

console.log(apiResponse.data.nome);
console.log(apiResponse.data["nome"]);

const dicionario = {
    nome: "João",
    idade: 25,
    profissao: "Engenheiro"
};

console.log(dicionario.nome);
console.log(dicionario["idade"]);

const dicionario1 = {};

//adicionando chaves e valores
dicionario["cor"] = "azul";
dicionario.tamanho = "grande";

console.log(dicionario1);

// removendo uma chave
delete dicionario["cor"];
console.log(dicionario);

//usando for in para percorrer
for (const chave in dicionario){
    console.log(`${chave}: ${dicionario[chave]}`);
}

// Obter todas as chaves
console.log(Object.keys(dicionario));

// Obter todos os valores
console.log(Object.values(dicionario));

//Obter par de chave e valor
Object.entries(dicionario).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});


//chaves

const cesta = { fruta: "maçã" };

if("fruta" in cesta) {
    console.log("Chave encontrada!");
} else {
    console.log("Chave não encontrada!")
}

const dados = { nome: "Carlos"};

if (!("idade" in dados)){
    dados["idade"] = 28;
}

console.log(dados);

// classe map

const mapa = new Map();

//Adicionando pares chave-valor
mapa.set("nome", "Ana");
mapa.set("idade", 30);

// Obtendo valores
console.log(mapa.get("nome"));

//Verificando se uma chave existe
console.log(mapa.has("idade"));

// Removendo uma chave
mapa.delete("idade");
console.log(mapa.has("idade"));

const mapa1 = new Map([
    ["chave1", "valor1"],
    ["chave2", "valor2"]
]);

// iterando com for...of

for(const [chave,valor] of mapa){
    console.log(`${chave}: ${valor}`);
}

//Map oferece: set, get, delete, clear
//Object: quando são strings ou símbolos, simples, sem ordem
//Map: Qlqr tipo de chave, ordem, operação frequentes