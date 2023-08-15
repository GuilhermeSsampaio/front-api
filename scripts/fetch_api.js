import React, {useState, useEffect} from 'react';
import Caps from '../components/Caps';

function FetchApi () {

const [data, setData] = useState([]);
  
  useEffect(()=> {
    CarregaCaps();
    document.title = 'Capitulos';
  }, []);

  const CarregaCaps = async () => {
    // const url = 'http://localhost:1337/api/capitulos?populate=*';
    const url = 'https://api-cartilha.onrender.com/api/capitulos?populate=*';
    
    try {
      const response = await fetch(url)
      if (response.ok) {
        const json = await response.json();
        const data = json.data;
        setData(data);
        console.log(data);

      } else {
        throw new Error('Falha na requisição. Código de status: ' + response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }
    return(
        <Caps lista = {data}/>

    );
}

export default FetchApi;