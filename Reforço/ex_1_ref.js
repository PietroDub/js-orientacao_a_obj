let Produto = {
    nome: "Arroz",
    preco: 10,
    mostrar(){
        console.log(`Produto: ${Produto.nome} - Preço: ${Produto.preco}`);
    }
}
//================================================================

class Agenda{
    constructor(nome, telefone){
        this.dados = {
            nome: nome, 
            telefone: telefone
        };
    }

    adicionarContato(name, cell){
        this.dados["nome"] = name;
        this.dados["telefone"] = cell;
    }

    mostrarContato(){
        Object.entries(dicionario).forEach(([chave,valor]) => {
            console.log(`${chave}: ${valor}`);
        });
    }
}

const ex_2 = new Agenda('Pedro', 1605923);
ex_2.adicionarContato('Anna', 12984201);
ex_2.mostrarContato();

//================================================================

class Biblioteca {
    constructor() {
        this.livros = {}; // objeto para armazenar os livros
    }

    adicionarLivro(codigo, titulo, autor) {
        this.livros[codigo] = { titulo: titulo, autor: autor };
    }

    listarLivros() {
        for (let codigo in this.livros) {
            let livro = this.livros[codigo];
            console.log(`${codigo} - ${livro.titulo} (${livro.autor})`);
        }
    }
}

// Teste
const bib = new Biblioteca();
bib.adicionarLivro("L001", "Dom Casmurro", "Machado de Assis");
bib.adicionarLivro("L002", "O Hobbit", "J.R.R. Tolkien");
bib.listarLivros();

//================================================================

class Carrinho{
    constructor(){
        this.produtos = {}
    }

    adicionarProduto(nome, preco){
        this.produtos[nome] = preco;
    };

    total(){
        let total = 0
        for(const name in this.produtos){
            total += this.produtos[name];
        }
        return total;
    }
}

const carrinho = new Carrinho();
carrinho.adicionarProduto("Arroz", 20);
carrinho.adicionarProduto("Feijão", 15);
carrinho.adicionarProduto("Carne", 50);

//================================================================

class Config{
    constructor(){
        this.obj = {};
    };

    setConfig(chave, valor){
        this.obj[chave] = valor;
    }


    getConfig(chave) {
        return this.configs[chave];
    }


    // retorna todaas as chaves
    // getConfig(chave){
    //     console.log(Object.keys(this.obj));
    // }

    mostrarTodas(){
        for(const key in this.obj){
            console.log(this.obj[key]);
        }
    }
}


//================================================================
//PARTE 2

let estoque = {};
estoque['Arroz'] = 10;
estoque.Feijão = 20;
estoque['Carne'] = 5;

for(const chave in estoque){
    console.log(estoque[chave]);
}

//=================================

let aluno = {
    nome: "Pedro",
    notas: [7, 4, 10]
};
// aluno['Pedro'] = [10, 9, 10];
// aluno['Anny'] = [9, 3, 9];
// aluno['Roberto'] = [10, 2, 5];

let media = 0;

for(const chave in estoque){
     media += aluno.notas[chave];
}

media = media / aluno.notas.length;

console.log("A média do aluno é: " + media);

//===============================

let traducao = {
    dog: "cachorro",
    cat: "gato",
    house: "casa",
    sun: "sol"
}

for(const chave in traducao){
    console.log(`${chave} -> ${traducao[chave]}`);
}

//==============================

let carrinho1 = {
    Arroz: 10,
    Batata: 20,
    Pudim: 12,
    Sorvete: 40
}

let soma = 0;

for(const chave in carrinho1){
    soma += carrinho1[chave];
}

console.log("Total da compra: R$" + total);

//==============================

let agenda_tel = {}

agenda_tel['Pedro'] = 1234354;
agenda_tel['Pascal'] = 19876021;
agenda_tel['Nana'] = 211469842;

for(const chave in agenda_tel){
    console.log(`Contato: ${chave} Número: ${agenda_tel[chave]} `);
}

