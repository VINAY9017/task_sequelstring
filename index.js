const server=require("./app")
require("dotenv").config()

const Port=process.env.PORT;
const Host=process.env.HOST;

server.listen(Port,function(){
    console.log(`Server Started http://${Host}:${Port}`);
    
})