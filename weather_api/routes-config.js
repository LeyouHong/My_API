"use strict";

const route = require("./app.js");

exports.configureRoutes = (app) => {
    app.post("/weather", route.main());
};
