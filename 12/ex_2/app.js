const Tesouro = require("./tesouro");

const tesouro = new Tesouro();
tesouro.Guardar(100);
console.log(tesouro.Olhar());
tesouro.Guardar(200);
console.log(tesouro.Retirar());
console.log(tesouro.Vazio());