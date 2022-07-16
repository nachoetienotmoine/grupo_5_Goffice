const fs = require("fs")
const User = {
    fileName : "./data/product.json" ,
    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName , "utf-8"));
    },

    
    create: function(userData){
        
    }
}
console.log(User.getData());