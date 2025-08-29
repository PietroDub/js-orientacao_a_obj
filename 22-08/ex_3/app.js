const Animal = require("./animal");
const Cachorro = require("./cachorro");
const Gato = require("./gato");


const cachorro_1 = new Cachorro("AUAU", 2);
const gato_1 = new Gato("Miauzinho", 2);
cachorro_1.falar();
gato_1.falar();