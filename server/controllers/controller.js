const model = require("../model/model");
const mongoose = require("mongoose");


const Signup = async(req,res) =>{
   let username = "otter"
   let password = "1234"
   let email = "otter@gmail.com"
   
   await model.create({
    username: username,
    email: email,
    password: password
   })


   res.json({
    msg: "user created"
   })
   
}

const hello = (req, res) => {
  res.json({
    msg: "hello from the server",
  });
};

module.exports = {
  hello,
  Signup
};
