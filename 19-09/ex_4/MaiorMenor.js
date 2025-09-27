const Node = require("../ex_3/Node");

class MaiorMenor{
    #head = undefined;
    #lenght = 0;


    insertAtBegging(value){
        let newNode = new Node(value);
        newNode.next = this.#head;
        this.#head = newNode;
        this.#lenght++;
    }
    inserAtEnd(value){
        let newNode = new Node(value);
        if(this.#head === undefined){
            this.#head = newNode;
        }

        let current = this.#head;
        while(current.next !== undefined){
            current = current.next;
        } 
        current.next = newNode;
        this.#lenght++;  
    }
    show(){
        let current = this.#head;
        let list = '';
        while(current !== undefined){
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'undefined');
    }

    findMaior(){
        if(this.#lenght === 1){
            return this.#head;
        }       

        let current = this.#head;
        let maior = this.#head;

        while(current.next !== undefined){
            current = current.next;
            if(current.value > maior.value){
                maior = current;
            }
        }

        console.log(`Maior:${maior.value}`);
    }

    findMenor(){
        if(this.#lenght === 1){
            return this.#head;
        }       

        let current = this.#head;
        let menor = this.#head;

        while(current.next !== undefined){
            current = current.next;
            if(current.value < menor.value){
                menor = current;
            }
        }

        console.log(`menor:${menor.value}`);
    }
}

module.exports = MaiorMenor;