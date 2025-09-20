class LinkedList {
    #head = undefined;
    #length = 0;

    //insere no ínocio
    insertAtBeggining(value){
        //cria um novo nó
        let newNode = new Node(value);

        //o novo nó aponta para o antigo head
        newNode.next = this.#head;

        // atualiza o novo nó para head
        this.#head = newNode;

        // incrementa o tamanho da lista
        this.#length++;
    }

    //insere no final
    insertAtEnd(value){

        //cria um novo nó
        let newNode = new Node(value);

        //se a lista estiver vazia se torna head
        if(this.#head === undefined){
            this.#head = newNode;
            return;
        }

        //percorre até o último item
        let current = this.#head;
        while (current.next !== undefined){
            current = current.next
        }

        //faz o último apontar ao novo nó
        current.next = newNode;

        // incrementa o tamanho da lista
        this.#length++;
    }

    //remover nó pelo valor
    removeByValue(value) {

        //a lista está vazia?
        if(this.#head === undefined){
            return;
        }

        //se o valor a ser removido estiver no primeiro nó
        if(this.#head.value === value) {
            //atualiza o head para o próximo nó
            this.#head = this.#head.next;
            return;
        }

        //percorre a lista procurando o nó a ser removido
        let current = this.#head;
        while (current.next !== undefined && current.next.value !== value){
            current = current.next;
        }

        // se o nó foi encontrado, ajusta o ponteiro para pular o nó removido
        if(current.next !== undefined) {
            current.next = current.next.next;
        }

        this.#length--;
    }

    // Buscar um nó por valor
    find(value){
        let current = this.#head;

        // percorre a lista até encontrar o nó ou até o final
        while (current != undefined) {
            console.log(current.value);
            if (current.value === value) {
                return current; //nó encontrdo
            }
            current = current.next;
        }

        return undefined; /// se não encontrar retorna null
    };

    //retorna o tamanho da lista
    size() {
        let count = 0;
        let current = this.#head;
        while (current !== undefined){
            count++;
            current = current.next
        }
        return count;
    }

    // Retorna true se a lista estiver vazia
    isEmpty = () => this.#head === undefined;

    //exibir a lista
    toString() {
        let current = this.#head;
        let list = '';
        while(current !== undefined){
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'undefined');
    }
}