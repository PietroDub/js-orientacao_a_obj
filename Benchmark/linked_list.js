const Node = require('./Node')
class linked_list{
    #head = undefined;
    #length = 0;

    insertAtBeggining(value){
        let newNode = new Node(value);
        newNode.next = this.#head;
        this.#head = newNode;
        this.#length++;
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

    find(value){
        let current = this.#head;

        while(current !== undefined){
            if(current.value === value) {
                return current;
            }
            current = current.next;
        }
        return undefined;
    }
};

module.exports = linked_list;