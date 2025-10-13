let Produto = {
    nome: "Arroz",
    preco: 10,
    mostrar(){
        console.log(`Produto: ${Produto.nome} - Preço: ${Produto.preco}`);
    }
}

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

class Biblioteca{
    constructor(titulo, autor){
         this.prateleira = {
            chave: chave,
            titulo: titulo,
            autor: autor
         };
    }
    
    adicionarLivro(codigo, titulo, autor){
        this.prateleira["chave"] = chave;
        this.prateleira["titulo"] = titulo;
        this.prateleira["autor"] = autor;
        
    }
}
