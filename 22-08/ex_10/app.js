const Livro = require("./Livro");
const Biblioteca = require("./Biblioteca");

// Criando biblioteca
let minhaBiblioteca = new Biblioteca();

// Criando livros
let livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
let livro2 = new Livro("Memórias Póstumas de Brás Cubas", "Machado de Assis", 1881);
let livro3 = new Livro("O Alienista", "Machado de Assis", 1882);
let livro4 = new Livro("Capitães da Areia", "Jorge Amado", 1937);

// Adicionando livros na biblioteca
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livro3);
minhaBiblioteca.adicionarLivro(livro4);

// Listar todos
minhaBiblioteca.listarLivros();

// Buscar por autor
minhaBiblioteca.buscarPorAutor("Machado de Assis");
minhaBiblioteca.buscarPorAutor("Jorge Amado");
minhaBiblioteca.buscarPorAutor("Clarice Lispector"); // não existe
