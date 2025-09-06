// app.js
const Cliente = require("./Cliente");
const Endereco = require("./Endereco");

const endereco1 = new Endereco("Rua Edmura", "Jardim Comércio", "Jaú", "São Pedro", "Brasil");
const cliente1 = new Cliente(endereco1, "Pedro", "pedro@gmail.com");

console.log(cliente1);
// Para acessar só o endereço:
console.log(cliente1.endereco);
