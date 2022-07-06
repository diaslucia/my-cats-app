import "./CircleCard.css";
import Icon from "../../atoms/Icon/Icon";

const CircleCard = ( { icons, img, action } ) => {
    return(
        <section className="circleCard">
            <Icon
                icons={icons}
                click={action}
                styles= {{
                    color: "#3D2C4E",
                    fontFamily: "30px",
                    position: "relative",
                    top: "60px",
                    left: "160px",
                    backgroundColor: "white",
                    padding: "8px 10px",
                    borderRadius: "50%",
                }}
            />
            <img className="circleCardCat" src={img} alt="Cat" />
        </section>
    );
}

export default CircleCard;