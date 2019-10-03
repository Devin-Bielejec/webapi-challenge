const express = require("express");

const actionRouter = require()
const projectRouter = require()

const server = express();

server.use(express.json());
server.use("/api/actions", actionRouter);
server.use("/api/project", projectRouter);

module.exports = server;