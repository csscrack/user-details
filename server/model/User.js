const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
   first_name : {
       type : String,
       required :true
   },
    last_name : {
        type : String,
        required :true
    } ,
    email : {
        type : String,
        required :true,
        unique : true
    } ,
    gender : {
        type : String,
        required :true
    } ,
    mobile_number : {
        type : String,
        required :true
    } ,
});
let User = mongoose.model('user',UserSchema);
module.exports = User;      