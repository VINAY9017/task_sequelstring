const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/taskOne")
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Not Cnnected");
  });
