const authModel = require("../Model/authModel");
const { comparePassword, expireTokenTime } = require("../Utils/Utils");
require("dotenv").config();
const jwt=require("jsonwebtoken")

exports.register = async (request, response) => {
  try {
    const body = request.body;
    const userData = {
      name: body.name,
      email: body.email,
      password: body.password,
      role: body.role,
    };
    const dbRes = await authModel.create(userData);
    if (dbRes) {
      return response.status(201).json({
        status: "success",
        message: "Register successfully",
        data: dbRes,
      });
    }
  } catch (error) {
    return response.status(400).json({
      status: "failed",
      message: "Register failed",
      error: error,
    });
  }
};

exports.login = async (request, response) => {
  try {
    const body = request.body;
    const query = {
      email: body.email,
    };
    const dbRes = await authModel.findOne(query);
    if (dbRes) {
      if (comparePassword(body.password, dbRes.password)) {
        const secretKey = process.env.SECREYKEY;
        const payload = {
          name: dbRes.name,
          email: dbRes.email,
          role: dbRes.role,
          _id: dbRes._id,
          time: Date(),
        };
        const token=jwt.sign(payload,secretKey,expireTokenTime())
        return response.status(200).json({
            status:"success",
            message:"login successfully",
            token:token
        })

      }
    } else {
      return response.statu(400).json({
        status: "failed",
        message: "Username and Password is Incorrect 1",
      });
    }
  } catch (error) {
    return response.statu(400).json({
      status: "failed",
      message: "failed to login",
      error: error,
    });
  }
};
