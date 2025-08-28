const model = require("../model/model");
const mongoose = require("mongoose");

const Signup = async (req, res) => {
  let { email, password, username } = req.body;

  let verify_email =  await model.findOne({ email: email });
  let verify_username = await model.findOne({ username: username });

  if (verify_email) {
    res.json({
      msg: "email already register",
      status: false
    });
  } else if (verify_username) {
    res.json({
      msg: "username is already in use",
      status: false
    });
  } else {
    await model.create({
      username: username,
      email: email,
      password: password,
    });

    res.json({
      msg: "user created",
      status: true
    });
  }
};

const Login = async (req, res) =>{
  let {email, password} = req.body

  let verify = await model.findOne({email: email, password: password})
  
  if(verify){
    res.json({
      msg: "Login Successful",
      status : true
    })
  }else{
    res.json({
      msg: "Credential are invalid",
      status : false
    })
  }
}

const hello = (req, res) => {
  res.json({
    msg: "hello from the server",
  });
};

module.exports = {
  hello,
  Signup,
  Login
};
