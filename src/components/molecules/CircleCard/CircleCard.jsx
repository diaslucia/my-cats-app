import "./CircleCard.css";
import Icon from "../../atoms/Icon/Icon";

const CircleCard = ( { icons, img, action } ) => {
    return(
        <section className="circleCard">
            <Icon
                icons={icons}
                click={action}
                styles= {{
                    color: "black",
                    fontFamily: "30px",
                    position: "relative",
                    top: "60px",
                    left: "160px",
                    backgroundColor: "white",
                    border: "1px solid black",
                    padding: "8px 10px",
                    borderRadius: "50%",
                }}
            />
            <img className="circleCardCat" src={img} alt="Cat" />
        </section>
    );
}

export default CircleCard;