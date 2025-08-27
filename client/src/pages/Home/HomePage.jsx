import AvatarMenu from "./homepagecomponents/header";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./subpages/landingpage";
import Login from "../AuthPage/login";
import Signin from "../../pages/AuthPage/signin"
function Homepage() {
  return (
    <div className="bg-white h-[100vh] w-[100vw] overflow-hidden">
      <AvatarMenu></AvatarMenu>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/signin" element={<Signin/>}/>
      </Routes>
    </div>
  );
}

export default Homepage;
