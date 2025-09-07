const Pedido = require("./Pedido")
const ItemPedido = require("./ItemPedido")

let item1 = new ItemPedido("Mouse", 100, 10);
let item2 = new ItemPedido("Teclado", 200, 5);

let Pedido1 = new Pedido([item1, item2])

console.log("Valor Total:", Pedido1.ValorTotal())