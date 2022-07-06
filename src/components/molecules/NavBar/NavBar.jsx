import "./NavBar.css";
import Icon from "../../atoms/Icon/Icon";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    return(
        <nav>
            <h1 className="nav-title" onClick={() => navigate("/")}>My Cats App</h1>
            <Icon click={() => navigate("/profile")} icons={faUser} styles={{color:"white"}} />
        </nav>
    );
}

export default NavBar;