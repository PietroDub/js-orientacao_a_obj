const Animal = require("./animal") 

class Cachorro extends Animal{

    falar(){
        console.log("au au:")
    }
};

 module.exports = Cachorro;