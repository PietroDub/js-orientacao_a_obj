const Node = require("./Node");

class  Both{
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
}
module.exports = Both;