const { request } = require("../../app");
const userModel = require("../Model/userModel");

exports.addUser = async (request, response) => {
  try {
    const body = request.body;
    const img = request.imagePath;
    console.log(img);

    const userData = {
      name: body.name,
      email: body.email,
      photo: img,
    };
    const dbRes = await userModel.create(userData);
    if (dbRes) {
      return response.status(201).json({
        status: "success",
        message: "add user successfully",
        data: dbRes,
      });
    }
  } catch (error) {
    return response.status(400).json({
      status: "failed",
      message: "failed to add user",
      error: error,
    });
  }
};

exports.getUser = async (request, response) => {
  try {
    const dbRes = await userModel.find();
    // dbRes = dbRes.map((ele) => {
    //   ele.photo = `http://localhost:9090/${ele.photo}`;
    //   return ele;
    // });
    if (dbRes) {
      return response.status(200).json({
        status: "success",
        message: "successfully",
        data: dbRes,
      });
    }
  } catch(error) {
    return response.status(400).json({
      status: "failed",
      message: "failed to get user",
      error: error,
    });
  }
};

exports.deleteUser = async (request, response) => {
  try {
    const id = request.params._id;
    console.log(id);
    
    const dbRes = await userModel.deleteOne(id)
    if (dbRes) {
      return response.status(200).json({
        status: "success",
        message: "delete successfully",
        data:dbRes
      });
    }
  } catch (error){
    console.log(error);
    
    return response.status(400).json({
      status: "failed",
      message: "failed to delete user",
      error: error,
    });
  }
};


exports.updateUser=async(request,response)=>{
    try{
        const Id = request.params._id;
        const img = request.imagePath
        
        const body=request.body;
        const data={
            name:body.name,
            email:body.email,
            photo:img
        }
        const dbRes=await userModel.updateOne({id:Id},data)
        if(dbRes){
            return response.status(200).json({
                status:"success",
                message:"update successfully",
                data:dbRes
            })
        }

    }
    catch(error){
        return response.status(400).json({
            status: "failed",
            message: "failed to update user",
            error: error,
          });

    }
}