const Animal = require("./animal") 

class Gato extends Animal{

    falar(){
        console.log("miau miau:")
    }
};

 module.exports = Gato;