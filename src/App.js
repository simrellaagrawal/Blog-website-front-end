import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

const Routing = () => {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/register"element={user ? <Home /> : <Register />}></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route path="/setting" element={user ? <Setting /> : <Register />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
    </Router>
  );
};
// function App() {
//   return (
//     <>
//       <Topbar />
//       <Routing />
//     </>
//   );
// }

export default Routing;
