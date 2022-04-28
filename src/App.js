import './styles/sass/App.scss';


// Modules:
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components:
import TileOne from './components/TileOne';
// import TileTwo from './components/TileTwo';


function App() {
  const [allPhotos, setAllPhotos] = useState([]);
  // const [filteredPhotos, setFilteredPhotos] = useState([])

  useEffect (() => {
    axios({
      url: 'https://api.unsplash.com/search/photos',
      method:'GET',
      dataResponse:'json',
      params: {
        client_id: '3-B5WhPSmJkkSBV3G3AWDnf1wcdjZSPALyHjFShogn4',
        query:'puppies',
        per_page: 4
      }
    }).then(response => {
      // console.log(response);
        const responsedata = response.data.results
        console.log('responsedata', responsedata)

        setAllPhotos(responsedata);
    })
  }, []);


  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <h2>Flip the tiles to find a matching set!</h2>
      </header>
      <div className="wrapper">
        <div className="gameboard">
          <TileOne photos={allPhotos} />
          {/* <TileTwo photos={allPhotos} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
