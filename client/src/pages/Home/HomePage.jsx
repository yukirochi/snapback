import AvatarMenu from "./homepagecomponents/header";
import { Routes, Route, data } from "react-router-dom";
import Landingpage from "./subpages/landingpage";
import Login from "../AuthPage/login";
import Signin from "../../pages/AuthPage/signin"
import Loginehead from "../Home/homepagecomponents/loginAvatar"
import { useEffect,useState } from "react";
function Homepage() {

 const [data, setData] = useState(localStorage.getItem("userdata"));

  useEffect(() => {
    const handleStorageChange = () => {
      setData(localStorage.getItem("userdata"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="bg-white h-[100vh] w-[100vw] overflow-hidden">
          {data ? <Loginehead></Loginehead> :<AvatarMenu></AvatarMenu>} 
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/signin" element={<Signin/>}/>
      </Routes>
    </div>
  );
}

export default Homepage;
