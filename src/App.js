import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { DataProvider } from "./context/AppContext";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import NavBar from "./components/molecules/NavBar/NavBar";

const App = () => {
  return (
    <BrowserRouter>
    <DataProvider>
      
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      
    </DataProvider>
    </BrowserRouter>
    
  );
}

export default App;
