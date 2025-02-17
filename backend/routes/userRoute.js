const express = require("express");
const  userRoute=require("../controllers/User");

const router =  express.Router();
router.route("/register").post(userRoute.Register);
router.route("/login").post(userRoute.Login);
router.route("/logout").get(userRoute.Logout);

module.exports= router;