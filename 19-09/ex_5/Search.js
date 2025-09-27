class Search{
    #head = undefined;
    #lenght = 0;

    filter(valor){
        let current = this.#head;
        while(current.next !== undefined){
            if(current.value === valor){
                console.log(`Achado o valor ${valor}`);
            }
            current = current.next;
        }
    }
}
module.exports = Search;