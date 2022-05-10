require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//DB connection
mongoose.connect(process.env.DB);

//ROUTES
const defaultRoute = require("./routes/index.js")
const customersRoute = require("./routes/customers.js")
const phonesRoute = require("./routes/phones.js")
const ordersRoute = require("./routes/orders.js")
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//ROUTES
app.use("/", defaultRoute)
app.use("/customers", customersRoute)
app.use("/orders", ordersRoute)
app.use("/phones", phonesRoute)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});