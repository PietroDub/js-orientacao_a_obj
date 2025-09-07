class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    listarPorCategoria(categoria) {
        let encontrados = this.livros.filter(l => l.categoria === categoria);

        if (encontrados.length > 0) {
            console.log(`📚 Livros da categoria "${categoria}":`);
            for (let livro of encontrados) {
                console.log(`- ${livro.titulo} (${livro.autor})`);
            }
        } else {
            console.log(`Nenhum livro encontrado na categoria "${categoria}".`);
        }
    }

    buscarPorTitulo(titulo) {
        let encontrado = this.livros.find(l => l.titulo === titulo);

        if (encontrado) {
            console.log(`🔎 Livro encontrado: ${encontrado.titulo} (${encontrado.autor})`);
        } else {
            console.log(`Nenhum livro encontrado com o título "${titulo}".`);
        }
    }
}

module.exports = Biblioteca;
