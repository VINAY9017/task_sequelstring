const express=require("express")
const { register, login } = require("../Controller/authController")

const authRoute=express.Router()

authRoute.post("/register",register)
authRoute.post("/login",login)

module.exports=authRoute