import "./NavBar.css";
import Icon from "../../atoms/Icon/Icon";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav>
            <h1 className="nav-title" onClick={useNavigate("/")}>My Cats App</h1>
            <Icon icons={faUser} />
        </nav>
    );
}

export default NavBar;