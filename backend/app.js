//1. 
//create server 

const cookieParser = require("cookie-parser");
const express = require ("express");
const userRoute = require("./routes/userRoute");

const cors = require("cors");

const app = express();

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
//API
app.use(
    cors({
      origin: "http://localhost:3001",
      credentials:true
       // Allow frontend URL
    })  
  );
  app.use(express.urlencoded({extended:true}))
  app.use(express.json());
  app.use("/api/v1/user", userRoute);
module.exports = app;

