import './styles/sass/App.scss';


// Modules:
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components:
import Tile from './components/Tile';
// import TileTwo from './components/TileTwo';


function App() {
  const [allPhotos, setAllPhotos] = useState([]);

  // setting the game tiles to an empty array to store the image copies in (the matching tiles)
  const [gameTiles, setGameTiles] = useState([]);
  
  // making a call to the API 
  useEffect (() => {
    axios({
      url: 'https://api.unsplash.com/search/photos',
      method:'GET',
      dataResponse:'json',
      params: {
        client_id: '3-B5WhPSmJkkSBV3G3AWDnf1wcdjZSPALyHjFShogn4',
        query:'puppies',
        per_page: 6
      }
    }).then(response => {
      // console.log(response);
        const responsedata = response.data.results
        console.log('responsedata', responsedata)

        setAllPhotos(responsedata)
    })
  }, []);



  // const copyOfPhotos = [...allPhotos];
  // const fullGameboard = copyOfPhotos.map(photo => {
  //   return {...photo};
  // })
  
  // setGameTiles(fullGameboard)



// returning the data in JSX
  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <h2>Flip the tiles to find a matching set!</h2>
      </header>
      <div className="wrapper">
        <div className="gameboard">
          <Tile photos={allPhotos} />
        </div>
      </div>
    </div>
  );
}

export default App;
