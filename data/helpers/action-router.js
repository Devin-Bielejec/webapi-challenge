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
router.get("/", (req, res) => {
    const { id } = req.body;

    Actions.get(id)
    .then(response => {
        res.status(200);
    })
    .catch(error => {
        res.status(500);
    })
})

//Update -> Update
router.put("/:id", (req, res) => {
    const id = req.params;
    const changes = req.body;

    Actions.update(id, changes)
    .then(response => res.status(200))
    .catch(error => res.status(500));
})

//Delete -> Remove