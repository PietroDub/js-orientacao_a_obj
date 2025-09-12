const Biblioteca = require('./feitico.js');

const minha_pilha = new Biblioteca();

minha_pilha.adicionar('Harry potter');
minha_pilha.adicionar('Lumine');

console.log(minha_pilha.verTopo());
console.log(minha_pilha.remover());
minha_pilha.verificar();