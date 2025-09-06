const Produto = require("./Produto")
const Carrinho = require("./Carrinho")

let produto1 = new Produto("Arroz", 20);
let produto2 = new Produto ("Feijao", 10);
let produto3 = new Produto("Abacate", 50);
let Carrinho1 = new Carrinho([produto1, produto2, produto3]);

console.log(Carrinho1.total())
