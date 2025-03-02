const express = require("express");
const router = express.Router();
const Projects = require("./projectModel");

//Create -> Insert
router.post("/", (req, res) => {
    const { name, description } = req.body;

    Projects.insert({name, description})
    .then(response => {
        res.status(200).json({message: "Project inserted!"});
    })
    .catch(error => {
        res.status(500).json({message: "Server Error"});
    })
})

//Read -> Get
router.get("/:id", (req, res) => {
    const { id } = req.params;

    Projects.get(id)
    .then(response => {
        res.status(200).json({message: "Got em!", data: response});
    })
    .catch(error => {
        res.status(500).json({message: "Server Error"});
    })
})

//Update -> Update
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    Projects.update(id, {name, description})
    .then(response => res.status(200).json({message: "updated", data: response}))
    .catch(error => res.status(500).json({message: "Server Error"}));
})

//Delete -> Remove
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    Projects.remove(id)
    .then(response => res.status(200).json({message: "Reee moove em!"}))
    .catch(error => res.status(500).json({message: "Server Error"}));
})

//Get list of actions for a project
router.get("/getActions/:project_id", (req, res) => {
    const { project_id } = req.params;

    Projects.getProjectActions(project_id)
    .then(response => res.status(200).json({message: "Got em!", data: response}))
    .catch(error => res.status(500).json({message: "Server Error"}))
})

module.exports = router;