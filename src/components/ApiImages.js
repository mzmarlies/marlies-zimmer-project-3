// MODULES:
import { useEffect, useState } from 'react';
import axios from 'axios';

// COMPONENTS:
import OriginalTiles from './OriginalTiles';

const ApiImages = () => {

  // Array to store both copies and originals:
  const [ mergedImages, setMergedImages ] = useState([]);

   
  // API call:
  useEffect (() => {
    axios({
      url: 'https://api.unsplash.com/search/photos',
      method:'GET',
      dataResponse:'json',
      params: {
        client_id: '3-B5WhPSmJkkSBV3G3AWDnf1wcdjZSPALyHjFShogn4',
        query:'planets',
        per_page: 9
      }
    }).then(response => {
      const responseData = response.data.results
      // Putting the responsedata into firstImages and storing the initial batch of images in the setFirstImage state:
      const firstImages = responseData.map((image, index) => {
        return {
          ...image,
          // Setting a default state for data object:
          matched: false,
          selected: false
        }
      });

      // Mapping over the data stored in the first images and accessing the image urls; storing these urls in the setCopiedImages state:
      const copiedImages = firstImages.map((image, index) => {
        return {
          // allows you to take the props from the original object to change them.
          ...image, 
          id: index
        }
      });

      const combinedImages = firstImages.concat(copiedImages);

      // Randomize array order:
      const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle:
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // Swap it wiht the current element:
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }
        return array;
      }

      setMergedImages(shuffle(combinedImages));

    })
    
  }, []);

  // Logic to determine tile matches:
  // get value from array:
  // ('element' is the iterator in 'find' call)
  const handleMatchCondition = (tile, condition) => {
    const value = mergedImages.find((element) => element.id === tile.id) 
    const index = mergedImages.findIndex((element) => element.id === tile.id)
     // ('condition' will refer to whether the value is true or false)
    value.matched = condition;
    const oldState = mergedImages;
    oldState[index] = value;
    setMergedImages(oldState)
  }

  // Logic to determine tile's position (flipped up or down)
  const handleTileCondition = (tile) => {
    const value = mergedImages.find((element) => element.id === tile.id)
    const index = mergedImages.findIndex((element) => element.id === tile.id)
    value.selected = !value.selected;
    const oldState = mergedImages;
    oldState[index] = value;
    setMergedImages(oldState)
  }
   // Returning JSX to the page:
  return(
    <div className="App">
      <div className="wrapper">
        <div className="gameboard">
          <OriginalTiles 
            photos={mergedImages} 
            matchCondition={handleMatchCondition} 
            tileCondition={handleTileCondition}
          />
        </div>
      </div>
    </div>
  );
}
export default ApiImages;

