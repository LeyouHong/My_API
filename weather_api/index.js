"use strict";

const express = require("express");
const bodyParser = require("body-parser")
const routes = require("./routes-config");

const app = express();

// body parser for POST JSON data
app.use(bodyParser.json());

// routes config
routes.configureRoutes(app);

// handle invalid/404 routes
app.use((req, res, next) => {
    res.status(404).send({ message: "request not found" });
})

const PORT_HTTP = process.env.PORT || 3000;
app.listen(PORT_HTTP, () => console.log(`Example app listening on port ${PORT_HTTP}`));

