const express = require("express");
const router = express.Router();
const Actions = require("./actionModel");
const Projects = require("./projectModel");

//Create -> Insert
router.post("/", (req, res) => {
    const { description, notes, project_id } = req.body;
    console.log(project_id);
    Projects.get(project_id)
    .then(response => {
        console.log(response);
        
        !response ? res.status(404).json({message: "There is no project with that ID"}) : console.log("hi");
        
        Actions.insert({description, notes, project_id})
        .then(response2 => {
            res.status(200).json({message: "Action inserted!"});
        })
        .catch(error2 => {
            res.status(500).json({message: "Server Error"});
        })

    })
    .catch(err => res.status(404).json({message: "There i no project with that ID"}));
    


})

//Read -> Get
router.get("/:id", (req, res) => {
    const id = req.params;

    Actions.get(id)
    .then(response => {
        console.log(response);
        reponse !== undefined ? res.status(200).json({message: "Got em!", data: response}) : null;
    })
    .catch(error => {
        res.status(500).json({message: "Server Error"});
    })
})

//Update -> Update
router.put("/", (req, res) => {
    const {id, project_id, description, notes } = req.body;
    console.log(id, {project_id, description, notes})
    Actions.update(id, {project_id, description, notes})
    .then(response => {
        console.log(response);
        response != null ? res.status(200).json({message: "Up date em!"}) : res.status(404).json({message: "Project Id does not exist!"});
    })
    .catch(error => res.status(500).json({message: "Server Error"}));
})

//Delete -> Remove
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    Actions.remove(id)
    .then(response => {
        console.log(response);
        res.status(200).json({message: "Reee moove em!"})
    })
    .catch(error => res.status(500).json({message: "Server Error"}));
})

module.exports = router;