const express = require("express");

const actionRouter = require("./data/helpers/action-router");
const projectRouter = require("./data/helpers/project-router");

const server = express();

server.use(express.json());
server.use("/api/actions", actionRouter);
server.use("/api/project", projectRouter);

module.exports = server;