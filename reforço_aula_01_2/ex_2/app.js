const Produto = require("./Produto")

let produto_1 = new Produto('Arroz', 80);
produto_1.mostrarPreco();
produto_1.aplicarDesconto(20);