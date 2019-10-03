const express = require("express");
const router = express.Router();
const Actions = require("./actionModel");

//Create -> Insert
router.post("/", (req, res) => {
    const { action } = req.body;

    Actions.insert(action)
    .then(response => {
        res.status(200);
    })
    .catch(error => {
        res.status(500);
    })
})

//Read -> Get

//Update -> Update

//Delete -> Remove