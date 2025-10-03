const Node = require("./Node");

class LinkedList{
    #head = undefined;
    #lenght = 0;

    InsertAtEnd(value){
        let newNode = new Node(value);
        if(this.#head === undefined){
            this.#head = newNode;
            return;
        }

        let current = this.#head;

        while(current.next !== undefined){
            current = current.next;
        }

        current.next = newNode;
        this.#lenght++;
    };

    ToString(){
        let current = this.#head;
        let list = 0;

        while(current.next !== undefined){
            list += current.value + "->";
            current = current.next;
        }

        console.log(list);
    }
}

module.exports = LinkedList;