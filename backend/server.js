const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const cors = require('cors');


const conncetdb = require("./dbconnection");
const donenv = require("dotenv").config();

conncetdb();
const app = express();
// app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());
console.log("hello");
app.use("/api/menu", require("./routes/menuRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})