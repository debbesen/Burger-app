const express = require("express");
const router = express.Router();


const burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.all(function(data) {
        let object = {
            burgers: data
        };
        console.log(object);
        res.render("index", object);
    
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
      "name", "devoured"  
    ],[
        req.body.name, req.body.devoured
    ],
    function(results) {
        console.log(results);
        res.json({ id: res.insertId });
    })
    console.log(req.body, "req.body");
});


module.exports = router;