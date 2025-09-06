class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    listarLivros() {
        console.log("📚 Lista de livros na biblioteca:");
        for (let livro of this.livros) {
            console.log(`${livro.titulo} - ${livro.autor} (${livro.ano})`);
        }
    }

    buscarPorAutor(autor) {
        let encontrados = this.livros.filter(livro => livro.autor === autor);
        
        if (encontrados.length > 0) {
            console.log(`🔎 Livros encontrados do autor ${autor}:`);
            for (let livro of encontrados) {
                console.log(`${livro.titulo} (${livro.ano})`);
            }
        } else {
            console.log(`Nenhum livro encontrado do autor ${autor}.`);
        }
    }
}

module.exports = Biblioteca;
