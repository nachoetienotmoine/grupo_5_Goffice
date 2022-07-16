const fs = require('fs');
const User = {

    fileName : './data/product.json' ,

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName , "utf-8"));
    },

    findAll: function () {
        return this.getData();
    },

    
    create: function(userData){
        
    },
    
}
console.log(User.delete(1));