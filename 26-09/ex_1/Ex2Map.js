class ContadorDeCaracteresMap {
    constructor(texto) {
        this.texto = texto;         // guarda o texto
        this.frequencia = new Map();// cria um Map vazio
    }

    contar() {
        for (let char of this.texto) {
            if (char === " ") continue; // ignora espaços

            if (this.frequencia.has(char)) { 
                this.frequencia.set(char, this.frequencia.get(char) + 1); 
            } else {
                this.frequencia.set(char, 1); 
            }
        }
        return this.frequencia;
    }
}

// Testando
const contadorMap = new ContadorDeCaracteresMap("banana split");
console.log(contadorMap.contar());
