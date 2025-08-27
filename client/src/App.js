import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/HomePage";
import Landingpage from "./pages/Home/subpages/landingpage";
import Login from "./pages/AuthPage/login";
import Signin from "./pages/AuthPage/signin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        <Route index element={<Landingpage />} />     {/* "/" */}
        <Route path="/auth/login" element={<Login/>} />  {/* "/auth" */}
        <Route path="/auth/signin" element={<Signin/>}/>
      </Route>
    </Routes>
  );
}

export default App;
