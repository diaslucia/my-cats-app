import React, { useState } from "react";

const AppContext = React.createContext({});

export const DataProvider = ({ children }) => {
  const [cats, setCats] = useState();
  const [favCats, setFavCats] = useState();
  const [files, setFiles] = useState([]);

  const axios = require('axios').default;
  const api = axios.create({
      baseURL:'https://api.thecatapi.com/v1'
  });
  api.defaults.headers.common['X-API-KEY'] = 'c420dce6-8afa-451e-99b8-c770c47ff394';

  const getCats = async () => {
    const { data, status } = await api.get('/images/search?limit=4');

    if(status !== 200) {
        console.log("Hubo un error: " + status + data.message);
    } else {
        setCats(data);
    }
  }

  const getFavoriteCat = async () => {
    const { data, status } = await api.get('/favourites');

    if(status !== 200) {
        console.log("Hubo un error: " + status + data.message);
    } else {
        setFavCats(data);
    }
  }

  const addFavoriteCat = async (id) => {
      const {data, status} = await api.post('/favourites', {
          image_id: id,
      })

      if(status !== 200) {
          console.log("Hubo un error: " + status + data.message);
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

  const uploadCat = async (file) => {
    let formData = new FormData();
    formData.append('file', file);
    console.log(file);
    console.log(formData.get("file"));

    const { data, status } = await api.post('/images/upload', {
      file: file,
    });

    console.log("click en uploadCat")
    console.log(status);
    console.log(data);

    if (status !== 200) {
        console.log("Hubo un error: " + status + data.message);
    }
    else {
        console.log("Foto de michi cargada");
        addFavoriteCat(data.id);
        getFavoriteCat();
    }
  }

  return (
    <AppContext.Provider
      value={{
        api,
        getCats,
        cats,
        getFavoriteCat,
        removeFavoriteCat,
        addFavoriteCat,
        favCats,
        files,
        setFiles,
        uploadCat
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;