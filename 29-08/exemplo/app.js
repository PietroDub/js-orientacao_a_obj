const MeuArray = require('./MeuArray');

let array1 = new MeuArray();

array1.adicionar(10);
array1.adicionar(20);
array1.adicionar(30);

console.table(array1.items);
console.log(array1.obterElemento(2));
console.log(array1.tamanhoArray());
console.log(array1.remover());
console.log(array1.tamanhoArray())
array1.limpar();

//ex 2
console.log("Ex 2=======================")


let array2 = new MeuArray();
array2.adicionar('Pedro');
array2.adicionar('Anna');
array2.adicionar('Julia');
array2.adicionar('Robery');
console.log(array2.obterElemento(2))
array2.limpar();

