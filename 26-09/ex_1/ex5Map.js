class Palavra{
    constructor(texto){
        this.texto = texto;
        this.biblioteca = new Map();
    }

    //split separa o texto em palavras
    contar(){
        for(let palavra of this.texto.split(" ")){
            if(palavra === ""){
                continue;
            }
            if(this.biblioteca.has(palavra)){
                this.biblioteca.set(palavra, this.biblioteca.get(palavra) + 1); 
            } else{
                this.biblioteca.set(palavra, 1);
            }
        }
        return this.biblioteca;
    }
}

const palavra = new Palavra("O Arroz branco é branco");
console.log(palavra.contar());