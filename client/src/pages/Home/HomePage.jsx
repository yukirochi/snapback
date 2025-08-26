import AvatarMenu from "./homepagecomponents/header";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./subpages/landingpage";
function Homepage() {
  return (
    <div className="bg-white h-[100vh] w-[100vw] overflow-hidden">
      <AvatarMenu></AvatarMenu>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </div>
  );
}

export default Homepage;
