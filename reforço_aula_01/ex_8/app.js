const Livro = require("./Livro");
const Biblioteca = require("./Biblioteca");

let biblio = new Biblioteca();

biblio.adicionarLivro(new Livro("Dom Casmurro", "Machado de Assis", "Romance"));
biblio.adicionarLivro(new Livro("Capitães da Areia", "Jorge Amado", "Romance"));
biblio.adicionarLivro(new Livro("Pequeno Príncipe", "Saint-Exupéry", "Infantil"));

biblio.listarPorCategoria("Romance");
biblio.buscarPorTitulo("Dom Casmurro");
biblio.buscarPorTitulo("Harry Potter");
