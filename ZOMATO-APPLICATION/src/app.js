const express  =  require("express");
const http = require("http");
const cors = require("cors");
const bodyparser = require("body-parser")
const {connectDB} =require("./db/dbconnection");
const config = require("./config/config");
const routes = require("./routes/V1");
const path =require("path")
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

/**
 * allow json data from body
 * parse application/json
 */
app.use(bodyparser.json());

/** enable cors */
app.use(cors());
app.options("*", cors());
app.use(express.static(path.join(__dirname,`./public`)));
app.use("/v1",routes);
app.use((req, res, next) => {
     next(new Error("Route not found!"));
   });

   //databse connect
connectDB();
// simple server create
http.createServer(app).listen(config.port,() =>{
     console.log(`Server SuccessFully Listing PORT Number in ${config.port}!...`)
});