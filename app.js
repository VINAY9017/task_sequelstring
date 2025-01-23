const express=require("express")
const authRoute = require("./src/Route/authRoute")
const userRoute = require("./src/Route/userRoute")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public/upload"))
app.use("/api/v1",authRoute)
app.use("/user/v1",userRoute)

module.exports=app