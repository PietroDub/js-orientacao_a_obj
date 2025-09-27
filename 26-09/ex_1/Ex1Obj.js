const Biblioteca = {};
// Biblioteca["matricula"] = "Nome";
Biblioteca["1"] = "Pedro";
Biblioteca["2"] = "Robert";
Biblioteca["3"] = "Lucas";

// Acesso 
for(const chave in Biblioteca){
    console.log(`${chave}: ${Biblioteca[chave]}`)
}

