import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./components/Profile/Profile";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  return(
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route path="/profile/:userName" element={<Profile/>}/>
      </Routes>
    </Router>
    );
}

export default App;
