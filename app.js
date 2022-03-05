const express = require("express");
const cors = require("cors");

const setupContactRoutes = require("./app/routes/contact.routes");
const { BadRequestError, errorHandler } = require("./app/errors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended:true}));

app.get("/", (req, res)=> {
    res.json({ 
        message: "welcome to con tact book application."
    });
    res.json('Welcome to homepage!')
});
setupContactRoutes(app);

// handle 404 response
app.use((req, res, next) => {
next(new BadRequestError(404, "Resource not found"));
});

app.use(( req, res, next) => {
    errorHandler.handleError(error, res);
});

// setupContactRoutes(app);
module.exports = app;




