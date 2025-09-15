const EditorTexto = require("./editorTexto");

const texto1 = new EditorTexto();

texto1.digitar('Opa tudo bem?')
texto1.digitar('Sim claro e vc?')
console.log(texto1.mostrarTexto());
texto1.digitar('Não poderia estar melhor!')

console.log(texto1.mostrarTexto());
texto1.vazio();