// Cliente.js
class Cliente {
    constructor(endereco, nome, email) {
        this.endereco = endereco; // composição: cliente TEM um endereço
        this.nome = nome;
        this.email = email;
    }
}
module.exports = Cliente;