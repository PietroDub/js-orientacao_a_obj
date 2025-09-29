class Converte {

    // Object -> Map
    ObjToMap(obj) {
        const mapa = new Map();
        for (const chave in obj) {
            mapa.set(chave, obj[chave]);
        }
        return mapa;
    }

    // Map -> Object
    mapToObj(mapa) {
        const obj = {};
        for (const [chave, valor] of mapa) {
            obj[chave] = valor;
        }
        return obj;
    }
}

// Testando
const obj = {
    nome: "carlos",
    numero: 42
};

const conversor = new Converte();

// Convertendo Object -> Map
const mapa = conversor.ObjToMap(obj);
console.log(mapa);  
// Map(2) { 'nome' => 'carlos', 'numero' => 42 }

// Convertendo Map -> Object
const objDeNovo = conversor.mapToObj(mapa);
console.log(objDeNovo);  
// { nome: 'carlos', numero: 42 }
