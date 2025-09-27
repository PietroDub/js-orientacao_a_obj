const dicionario = {};
dicionario["nome"] = "Carlos";
dicionario["número"] = 42;

// Acesso
console.log(dicionario.nome);
console.log(dicionario["número"]);

// Iteração
for (const chave in dicionario){
    console.log(`${chave}: ${dicionario[chave]}`);
}