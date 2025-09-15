const Navegador = require("./Navegador");

const navegas1 = new Navegador();
navegas1.visitar('whatsapp.com');
console.log(navegas1.paginaAtual());
navegas1.visitar('youtube.com');
navegas1.visitar('bethoven.com');
navegas1.voltar();
navegas1.historico();
