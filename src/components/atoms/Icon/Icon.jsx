import "./Icon.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ( { icons, styles, click } ) => {
    return(
        <FontAwesomeIcon style={styles} className="icon" icon={icons} onClick={click} alt="Profile Icon"/>
    );
}

export default Icon;