const mongoose = require('mongoose')

const Schema = mongoose.Schema


const userSchema = Schema({

    name : {
        type: String,
        required: [true, "A Name is required"]
    },
    email : {
        type: String,
        required : [true, "An Email is required"],
        unique: true
    },
    password : {
        type: String,
        required: [true, "A Password is required"]
    }
}, {timestamps: true})


module.exports = mongoose.model('User',userSchema)