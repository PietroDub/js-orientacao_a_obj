class Checar{
    constructor(){
        this.biblioteca = new Map();
    }
    adicionar(chave,valor){
        this.biblioteca.set(chave,valor);
    }

    check(){
        for(const [chave,valor] of this.biblioteca){
            if(!valor || valor === undefined || valor == ""){
                this.biblioteca.delete(chave);
            }
        }
        return this.biblioteca;
    }
}
//não pode se passar a msm chave
const checando = new Checar();
checando.adicionar("1","Arroz");
checando.adicionar("2","Doce");
checando.adicionar("", null);
checando.adicionar("3","Feijão");

console.log(checando.check());