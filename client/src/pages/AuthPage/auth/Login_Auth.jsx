import axios from "axios";
async function Logi_auth(email, password) {
  try {
    let res = await axios.post("http://localhost:4000/api/login",{
        email: email,
        password: password
    })
    return res.data
  } catch (error) {
    console.log(error);
  }
}

export default Logi_auth;