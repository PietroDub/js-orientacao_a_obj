const Pessoa = require("./Pessoa.js")

const pessoa_1 = new Pessoa("Pedro", 18);
pessoa_1.apresentar();
const pessoa_2 = new Pessoa("Anna", 19);
pessoa_2.apresentar();


let n = 0
for(let i; i > n; i++ ){
n = n * i;
}