import { useEffect, useState } from "react";
import axios from "axios";
 async function Signin_Auth(username, email, password) {
  try {
    const res = await axios.post("http://localhost:4000/api/signup", {
      username: username,
      email: email,
      password: password,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export default Signin_Auth;
