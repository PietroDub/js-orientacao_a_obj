const PilhaPrato = require("./PilhaPrato");

const pilha1 = new PilhaPrato();
pilha1.adicionar('prato1');
pilha1.verTopo();
pilha1.adicionar('prato2');
pilha1.usarPrato();
pilha1.estaVazia();