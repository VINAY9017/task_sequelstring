const express=require("express")
const { addUser, deleteUser, getUser, updateUser } = require("../Controller/userController")
const upload = require("../Middleware/uploadMiddleware")
const { verify } = require("../Middleware/userMiddleware")


const userRoute=express.Router()
userRoute.use(verify)
userRoute.post("/add",upload.single("photo"), addUser)
userRoute.get("/get",getUser)
userRoute.delete("/delete/:id",deleteUser)
userRoute.put("/update/:id",upload.single("photo"), updateUser)


module.exports=userRoute