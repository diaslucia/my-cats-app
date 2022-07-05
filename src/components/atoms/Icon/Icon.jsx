import "./Icon.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Icon = (icons, text) => {
    let navigate = useNavigate();
    return(
        <FontAwesomeIcon className="icon" icon={icons.icons} onClick={navigate="/profile"} alt="Profile Icon"/>
    );
}

export default Icon;