import { useEffect, useContext } from "react";
import "./CatsHome.css";
import AppContext from "../../../context/AppContext";
import { faHeart, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import Card from "../../molecules/Card/Card";
import Icon from "../../atoms/Icon/Icon";

const CatsHome = () => {

    const {
        getCats,
        cats,
    } = useContext(AppContext);

    useEffect(() => {
        getCats();
    }, []);

    return(
        <section className="catsHome">
            <section className="catsContainer">
                {cats && cats.map((element) => {
                    return(
                        <Card
                            key={element.id}
                            icons={faHeart}
                            img={element.url}
                            id={element.id}
                        />
                    )
                }  
                )}
            </section>
            <Icon
                click={getCats}
                icons={faArrowRotateRight}
                styles={{ 
                    color: "#3D2C4E",
                    fontSize: "50px",
                    marginLeft: "50px",
                    backgroundColor: "white",
                    padding: "13px 15px",
                    borderRadius: "50%",
                }}
            />
        </section>
    );
}

export default CatsHome;