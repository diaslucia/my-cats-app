import { useEffect, useContext } from "react";
import "./CatsFavorites.css";
import AppContext from "../../../context/AppContext";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import CircleCard from "../../molecules/CircleCard/CircleCard";

const CatsFavorites = () => {

    const {
        getFavoriteCat,
        removeFavoriteCat,
        favCats
    } = useContext(AppContext);

    useEffect(() => {
        getFavoriteCat();
    }, []);

    return(
        <section className="catsFav">
            <div className="catsFavTitleContainer">
                <h2 className="catsFavTitle">My Favorites</h2>
            </div>
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