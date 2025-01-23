const mongoose = require("mongoose");
const collection = require("../Config/Collection");
const { passwordEncoded } = require("../Utils/Utils");
require("../Config/Db")

const authSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
},{
    timestamps:true
});

authSchema.pre("save",function(){
    this.password=passwordEncoded(this.password)
})

const authModel=mongoose.model(collection.account,authSchema)

module.exports=authModel
