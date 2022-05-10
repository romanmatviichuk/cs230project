const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    firstName: String,
})

module.exports.Customer = mongoose.model("Customer", customerSchema)