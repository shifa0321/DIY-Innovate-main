const { Schema, model } = require("../connection");

const UserSchema = new Schema({
    name : { type : String, required : true },
    email : { type : String, required : true, unique : true },
    password : { type : String, required : true },
    role: { type: String, enum: ['user', 'seller', 'admin'], default: 'user' },
    createdAT : { type : Date, default : Date.now }
})

module.exports = model('user', UserSchema);