// importing styles:
import './styles/sass/App.scss';

// importing modules:
import { useEffect, useState } from 'react';
import axios from 'axios';

// importing components:
import OriginalTiles from './components/originalTiles';
import DuplicateTiles from './components/DuplicateTiles';


function App() {
  
  // creating an empty array that will store the images we get back from API:
  const [ firstImages, setFirstImages ] = useState([]);

  // creating an empty array that will store the copies of the images:
  const [ copiedImages, setCopiedImages ] = useState([]);
  
  // calling the API:
  useEffect (() => {
    axios({
      url: 'https://api.unsplash.com/search/photos',
      method:'GET',
      dataResponse:'json',
      params: {
        client_id: '3-B5WhPSmJkkSBV3G3AWDnf1wcdjZSPALyHjFShogn4',
        query:'animals',
        per_page: 6
      }
    }).then(response => {
      const responsedata = response.data.results

      // putting the responsedata into firstImages:
      const firstImages = responsedata;

      // storing the initial batch of images in the setFirstImage state:
      setFirstImages(firstImages);

      // mapping over the data stored in the first images and accessing the image urls:
      const copiedImages = firstImages.map((object) => {
        return object.urls.small
      });

      // storing these urls in the setCopiedImages state
      setCopiedImages(copiedImages);

      console.log('these are originals', firstImages);
      console.log('these are copies', copiedImages);

    })
  }, []);
  
  // const singlePhoto = (event) => {
  //   event.preventDefault();
  // }

  // returning JSX to the page:
  return(
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <h2>Flip the tiles to find a matching set!</h2>
      </header>
      <div className="wrapper">
        <div className="gameboard">
          {/* <OriginalTiles photos={singlePhoto} /> */}
          <OriginalTiles photos={firstImages} />
          <DuplicateTiles duplicates={copiedImages} />
        </div>
      </div>
    </div>
  );
}



export default App;




// import './styles/sass/App.scss';


// // Modules:
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// // Components:
// import Tile from './components/Tile';
// import TileCopies from './components/TileCopies';


// function App() {
//   // const [allPhotos, setAllPhotos] = useState([]);

//   // setting the game tiles to an empty array to store the image copies in (the matching tiles)
//   // const [gameTiles, setGameTiles] = useState([]);
//   // const [imageCopy, setImageCopy] = useState([]);
//   // const [finalTiles, setFinalTiles] = useState([]);
//   // will return an array with both arrays inside^


//   const [originals, setOriginals] = useState([])
//   const [copies, setCopies] = useState([])

//   // making a call to the API 
//   useEffect (() => {
//     axios({
//       url: 'https://api.unsplash.com/search/photos',
//       method:'GET',
//       dataResponse:'json',
//       params: {
//         client_id: '3-B5WhPSmJkkSBV3G3AWDnf1wcdjZSPALyHjFShogn4',
//         query:'animals',
//         per_page: 6
//       }
//     }).then(response => {
//       // console.log(response);
//         const responsedata = response.data.results
//         // responsedata.push(responsedata);

//         // .map response.data.results, push into an empty array?
//         // do outsdie of .then

//         setOriginals(responsedata)

//         // responsedata.map((oneTile) => {
//         //   setFinalTiles(oneTile.urls.small)
//         // })

//         // console.log(finalTiles)
//         // console.log('responsedata', responsedata)

//         // setAllPhotos(responsedata)
        
//         // setGameTiles(responsedata)
//         // setImageCopy(responsedata)
//         // use .map instead of duplicating here^
//         // maybe a forEach

//     })
//   }, []);

//   // useEffect( () => {
//   //   imageCopy.forEach(tile => gameTiles.push(tile))
//   //   console.log(gameTiles)

//   // })




// // returning the data in JSX
//   return (
//     <div className="App">
//       <header>
//         <h1>Memory Game</h1>
//         <h2>Flip the tiles to find a matching set!</h2>
//       </header>
//       <div className="wrapper">
//         <div className="gameboard">
//           <Tile tiles={originals}/>
//           <TileCopies duplicates={copies} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
