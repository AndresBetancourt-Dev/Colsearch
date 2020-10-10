const express = require("express");
const cors = require("cors");
const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/users", require("./routes/users.routes"));

module.exports = app;
