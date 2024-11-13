const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    firstname : String,
    lastname : String,
    email : String,
    password : String,
    Bio : String,
    role : {
        type : String,
        emun : ['admin','user'],
        default : 'user',
    },
    picture : String,
    birthdate : Date,

})



module.exports = mongoose.model('users',userSchema);