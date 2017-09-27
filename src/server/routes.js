const express = require('express');

const router = express.Router();

router.get('/hereos', (req, res) =>{
    res.send(200, [
        {"id": 12, "name":"test man","saying":"oh yeah"}
    ])
});

module.exports = router;