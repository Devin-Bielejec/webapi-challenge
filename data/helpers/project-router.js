const express = require("express");
const router = express.Router();
const Projects = require("./projectModel");

//Create -> Insert
router.post("/", (req, res) => {
    const { project } = req.body;

    Project.insert(project)
    .then(response => {
        res.status(200).json({message: "Project inserted!"});
    })
    .catch(error => {
        res.status(500).json({message: "Server Error"});
    })
})

//Read -> Get
router.get("/:id", (req, res) => {
    const id = req.params;

    Projects.get(id)
    .then(response => {
        res.status(200).json({message: "Got em!"});
    })
    .catch(error => {
        res.status(500).json({message: "Server Error"});
    })
})

//Update -> Update
router.put("/:id", (req, res) => {
    const id = req.params;
    const changes = req.body;

    Actions.update(id, changes)
    .then(response => res.status(200).json({message: "Up date em!"}))
    .catch(error => res.status(500).json({message: "Server Error"}));
})

//Delete -> Remove
router.delete("/:id", (req, res) => {
    const id = req.params;

    Actions.remove(id)
    .then(response => res.status(200).json({message: "Reee moove em!"}))
    .catch(error => res.status(500).json({message: "Server Error"}));
})