const Node = require('./Node')
class Create_List{
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
};

module.exports = Create_List;