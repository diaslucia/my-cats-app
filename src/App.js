import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import NavBar from "./components/molecules/NavBar/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <NavBar/>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
