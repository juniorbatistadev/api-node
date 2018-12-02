var mongoose = require('../db');

var photoSchema = new mongoose.Schema({
    filename : {
        type : String,
        require : true 
    },
    filepath: {  
        type: String,
        require:true
    }
})

var Photo = module.exports('Photo', photoSchema);