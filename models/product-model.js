const mongoose = require("mongoose")

const prductSchema = mongoose.Schema({
    image: String,
name: String,
price: number,
discount: {
    type: number,
    default: 0
},
bgcolor: String,
panelcolor: String,
textcolor: String
})

module.exports = mongoose.model("product", productSchema)