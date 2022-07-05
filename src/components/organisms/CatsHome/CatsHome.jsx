import { useState, useEffect } from "react";
import "./CatsHome.css";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from "../../molecules/Card/Card";

const CatsHome = () => {
    const [cats, setCats] = useState();

    const axios = require('axios').default;
    const api = axios.create({
        baseURL:'https://api.thecatapi.com/v1'
    });
    api.defaults.headers.common['X-API-KEY'] = 'c420dce6-8afa-451e-99b8-c770c47ff394'

    useEffect(() => {
        getCats();
    });

    const getCats = async () => {
        const { data, status } = await api.get('/images/search?limit=3');
    
        if(status !== 200) {
            console.log("Hubo un error: " + status + data.message);
        } else {
            /* setCats(data)
            console.log(cats) */
        }
    }

    return(
        <section className="catsHome">
           {/* {cats.map((element) => {
                return
                (
                <Card icons={faHeart} img={element.url}/>
                )
            })} */}
        </section>
    );
}

export default CatsHome;