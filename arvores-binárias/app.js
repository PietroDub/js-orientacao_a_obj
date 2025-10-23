const Binaria = require("./bynarytree");
const arvore = new Binaria();
arvore.insert(50,30,70,20,40,60,80);
console.log("Percurso em-ordem:");
arvore.inOrder();
console.log("Percurso pre-ordem:");
arvore.preOrder();
console.log("Percurso pós ordem:")
arvore.postOrder();

arvore.search(50);
arvore.search(100);

arvore.countNodes();
console.log(arvore.isEmpty());