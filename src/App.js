import './App.css';

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
        per_page: 2
      }
    }).then(response => {
      // console.log(response);
        const responsedata = response.data.results
        console.log('responsedata', responsedata)

        setAllPhotos(responsedata);
    })
  }, []);

  // const getPhotos = (event, orientationChoice) => {
  //   event.preventDefault();

  //   const copyOfPhotos = [...allPhotos]
  //   const photosFiltered = copyOfPhotos.filter(singlePhoto => {
  //     return singlePhoto.orientation === orientationChoice
  //   })

  //   setFilteredPhotos(photosFiltered)
  // }



  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="results">
        <TileOne photos={allPhotos} />
        {/* <TileTwo photos={allPhotos} /> */}
      </div>
    </div>
  );
}

export default App;
