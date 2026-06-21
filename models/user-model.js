const mongoose = require("mongoose")


const ownerSchema = mongoose.Schema({
    fullname: {
        type:String,
        minLength: 3,
        trim: true
    },
email: String,
password: String,
cart : {
    type: array,
    default: []
},
isAdmin: boolean,
orders: {
    type: array,
    default: []
},
contact: Number,
picture: String
})
module.exports = mongoose.model("user", userSchema)