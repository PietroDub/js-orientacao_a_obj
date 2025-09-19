class Livro{
    constructor(titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    descricao(){
        console.log(`${this.titulo} - ${this.autor} (${this.ano})`);
    }
}
module.exports = Livro;