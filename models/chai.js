const mongoose = require("mongoose")

const chaiSchema = new mongoose.Schema({
    name: { type: String, required: true },
    inventory: { type: Number, required: true },
    about: {type: String, required : false},
    image : {type : String, required : false},
    price: {type: String, required: false}
  })
  
  const Chai = mongoose.model("Chai", chaiSchema)

 module.exports = Chai