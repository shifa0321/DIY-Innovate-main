const { Schema, model } = require("../connection");

const mySchema = new Schema({
    name : { type : String, required : true },
    contact : { type : Number, required : true },
    email : { type : String, required : true },
    password : { type : String, required : true },
    createdAT : { type : Date, default : Date.now }
})

module.exports = model('user', mySchema);