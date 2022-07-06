import { useState } from "react";
import "./Card.css";
import Icon from "../../atoms/Icon/Icon";

const Card = ( { icons, img, id } ) => {
    const [color, setColor] = useState(false);

    const axios = require('axios').default;
    const api = axios.create({
        baseURL:'https://api.thecatapi.com/v1'
    });
    api.defaults.headers.common['X-API-KEY'] = 'c420dce6-8afa-451e-99b8-c770c47ff394'

    const handleFavorite = () => {
        if(color){
            removeFavoriteCat(id);
            setColor(false);
        } else {
            setColor(true);
            addFavoriteCat(id);
        }
    }

    const removeFavoriteCat = async (id) => {
        const { data, status } = await api.delete(`/favourites/${id}`);
    
        if(status !== 200){
            console.log("Hubo un error: " + status + data.message);
        } else {
            console.log("Cat removed from favorites");
        }
    }

    const addFavoriteCat = async (id) => {
        const {data, status} = await api.post('/favourites', {
            image_id: id,
        })
    
        if(status !== 200) {
            console.log("Hubo un error: " + status + data.message);
        } else {
            console.log("Añadido a favoritos");
        }
    }

    return(
        <section className="card">
            <Icon icons={icons} click={handleFavorite}
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