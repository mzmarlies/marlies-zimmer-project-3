// importing styles:
import './styles/sass/App.scss';

// importing modules:
import { useEffect, useState } from 'react';
import axios from 'axios';

// importing components:
import OriginalTiles from './components/OriginalTiles';
import DuplicateTiles from './components/DuplicateTiles';
// import CardFlip from './components/CardFlip';
import Tiles from './components/Tiles';


function App() {
  
  // creating an empty array that will store the images we get back from API:
  const [ firstImages, setFirstImages ] = useState([]);

  // creating an empty array that will store the copies of the images:
  const [ copiedImages, setCopiedImages ] = useState([]);

  // creating an array to store both copies and originals:
  const [ mergedImages, setMergedImages ] = useState([]);

  // listen for user choice and store matching logic in a function:
  // const [ userChoice, setUserChoice ] = useState([]);
  const [ imageMatch, setImageMatch ] = useState([]);

   
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

      // putting the responsedata into firstImages and storing the initial batch of images in the setFirstImage state:
      const firstImages = responsedata;
      let { urls, id } = firstImages;
      setFirstImages(firstImages);
      // console.log('first images', firstImages)

      // mapping over the data stored in the first images and accessing the image urls; storing these urls in the setCopiedImages state:
      const copiedImages = firstImages.map((object) => {
        return object.urls.small
      });
      setCopiedImages(copiedImages);
      // console.log('copied images', copiedImages)

      // merging the two arrays, store in the setMergedImages state:
      const combinedImages = firstImages.concat(copiedImages);
      setMergedImages(mergedImages)


      // const imageMatch = combinedImages.map(index => {
      //     if(firstImages.urls === copiedImages.index) {
      //     console.log(`it's a match`);
      //   }
      // })
      // console.log(imageMatch);

      
        combinedImages.map((singleImage) => {
          const cardFlip = (image) => {
            console.log(image);
          }

          return (
            <DuplicateTiles flip={() => cardFlip(singleImage)} />
          )

        })

      
      // console.log('these are merged', combinedImages)

    })
    
  }, []);


  const [userChoice, setUserChoice] = useState([]);

  let classes = 'inactive';

  const handleChoice = (event) => {
      setUserChoice(event.target.value);
      console.log('user clicked an image');
      if(setUserChoice) {
            classes += 'active' 
        } else {
            classes = 'inactive';
        }
    }

  
  // returning JSX to the page:
  return(
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <h2>Flip the tiles to find a matching set!</h2>
      </header>
      <div className="wrapper">
        <div className="gameboard">
          <OriginalTiles photos={firstImages} flip={handleChoice}/>
          <DuplicateTiles duplicates={copiedImages} flip={handleChoice}  />
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
