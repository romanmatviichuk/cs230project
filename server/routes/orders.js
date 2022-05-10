const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.send("list of orders")
})

module.exports = router;