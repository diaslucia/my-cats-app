import { useState, useContext } from "react";
import "./Card.css";
import AppContext from "../../../context/AppContext";
import Icon from "../../atoms/Icon/Icon";

const Card = ( { icons, img, id } ) => {
    const [color, setColor] = useState(false);

    const {
        addFavoriteCat,
    } = useContext(AppContext);
    
    const handleFavorite = (id) => {
        setColor(true);
        addFavoriteCat(id);
    }
    
    return(
        <section className="card">
            <Icon
                icons={icons}
                click={() => handleFavorite(id)}
                styles= {{
                    color: color ? "#cc2c25" : "white",
                    fontFamily: "60px",
                    position: "relative",
                    top: "60px",
                    left: "350px",
                    backgroundColor: "#3D2C4E",
                    padding: "8px 10px",
                    borderRadius: "50%",
                }}
            />
            <img className="cardCat" src={img} alt="Cat" />
        </section>
    );
}

export default Card;