import { useState, useEffect } from "react";
import "./CatsFavorites.css";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import CircleCard from "../../molecules/CircleCard/CircleCard";

const CatsFavorites = () => {
    const [favCats, setFavCats] = useState();

    const axios = require('axios').default;
    const api = axios.create({
        baseURL:'https://api.thecatapi.com/v1'
    });
    api.defaults.headers.common['X-API-KEY'] = 'c420dce6-8afa-451e-99b8-c770c47ff394'
    
    const getFavoriteCat = async () => {
        const { data, status } = await api.get('/favourites');
    
        if(status !== 200) {
            console.log("Hubo un error: " + status + data.message);
        } else {
            setFavCats(data);
        }
    }

    const removeFavoriteCat = async (id) => {
        const { data, status } = await api.delete(`/favourites/${id}`);
    
        if(status !== 200){
            console.log("Hubo un error: " + status + data.message);
        } else {
            console.log("Cat removed from favorites");
            getFavoriteCat();
        }
    }

    useEffect(() => {
        getFavoriteCat();
    }, []);

    return(
        <section className="catsFav">
            <h2 className="catsFavTitle">My Favorites</h2>
            <div className="catsFavContainer">
                {favCats && favCats.map((element) => {
                    return(
                        <CircleCard
                            key={element.id}
                            icons={faTrashCan}
                            img={element.image.url}
                            id={element.id}
                            action={() => removeFavoriteCat(element.id)}
                        />
                    )
                }  
                )}
            </div>
        </section>
        
    );
}

export default CatsFavorites;