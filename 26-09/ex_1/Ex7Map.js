class Converte{

    ObjToMap(obj){
        Object.entries(obj)
        const mapa = new Map();
        
    }

    mapToObj(mapa){
        mapa = {
            
        }
    }
}

const conversor = new Converte();
const mapa = new Map();
mapa.set("nome", "carlos");
mapa.set("numero", 42);

conversor.mapToObj(mapa);