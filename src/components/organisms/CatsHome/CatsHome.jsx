import { useState, useEffect } from "react";
import "./CatsHome.css";
import { faHeart, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import Card from "../../molecules/Card/Card";
import Icon from "../../atoms/Icon/Icon";

const CatsHome = () => {
    const [cats, setCats] = useState();

    const axios = require('axios').default;
    const api = axios.create({
        baseURL:'https://api.thecatapi.com/v1'
    });
    api.defaults.headers.common['X-API-KEY'] = 'c420dce6-8afa-451e-99b8-c770c47ff394'

    const getCats = async () => {
        const { data, status } = await api.get('/images/search?limit=4');
    
        if(status !== 200) {
            console.log("Hubo un error: " + status + data.message);
        } else {
            setCats(data);
        }
    }

    useEffect(() => {
        getCats();
    }, []);

    return(
        <section className="catsHome">
            <section className="catsContainer">
                {cats && cats.map((element) => {
                    return(
                        <Card key={element.id} icons={faHeart} img={element.url} id={element.id}/>
                    )
                }  
                )}
            </section>
            <Icon onClick={() => getCats()} icons={faArrowRotateRight} styles={{  color: "black",
                                                                    fontSize: "50px",
                                                                    marginLeft: "50px",
                                                                    }}/>
        </section>
    );
}

export default CatsHome;