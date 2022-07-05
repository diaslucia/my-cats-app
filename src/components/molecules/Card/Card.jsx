import "./Card.css";
import Icon from "../../atoms/Icon/Icon";

const Card = ( icons, img ) => {
    return(
        <section className="card">
            <Icon icons={icons} />
            <img src={img} alt="Cat"/>
        </section>
    );
}

export default Card;