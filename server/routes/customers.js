const express = require('express');
const Customer = require("../models/Customer.js").Customer
const router = express.Router();


router.get("/", (req, res) => {
    Customer.find({firstName: new RegExp(".*" + req.query.q + ".*")}).then(t => {
        t = t.slice(0, 10)
        res.json(t)
    })
})

router.get("/profile", (req, res) => {
    console.log(req.path)
    res.json({id: req.query.id})
})

router.delete("/", (req, res) => {
    console.log("deleting user, id=" + req.query.id)
    Customer.deleteOne({_id: req.query.id}, result => {
        res.json(result)
    })
})

module.exports = router;