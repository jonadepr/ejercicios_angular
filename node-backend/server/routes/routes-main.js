const express = require('express'); // Me traigo el express
const router = express.Router(); // Me creo un Router


router.get("/",
    (req, res) => res.status(200).send("hola mundo!")
)

module.exports = router;
