const express = require("express");
const cors = require("cors");
const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("images"));

//Routes
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/missing", require("./routes/missingpersons.routes"));

module.exports = app;
