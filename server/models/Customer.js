const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    title: String,
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    addressLine1: String,
    addressLine2: String,
    town: String,
    county: String,
    eircode: String
})

module.exports.Customer = mongoose.model("Customer", customerSchema)