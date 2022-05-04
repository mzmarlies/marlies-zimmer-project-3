// MODULES:
import { useEffect, useState } from 'react';
import axios from 'axios';

// COMPONENTS:
import OriginalTiles from './OriginalTiles';

const ApiImages = () => {

  // array to store both copies and originals:
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
      const responsedata = response.data.results

      // putting the responsedata into firstImages and storing the initial batch of images in the setFirstImage state:
      const firstImages = responsedata.map((image, index) => {
        return {
          ...image,
          matched: false
          // setting a default state for data object
        }
      });



      // mapping over the data stored in the first images and accessing the image urls; storing these urls in the setCopiedImages state:
    
      const copiedImages = firstImages.map((image, index) => {
        return {
          // allows you to take the props from the original object to change them.
          ...image, 
          id: index
        }
      });

      const combinedImages = firstImages.concat(copiedImages);
      setMergedImages(combinedImages)

    })
    
  }, []);

  // get value from array 
  // set its 'matched' property to true
 // Trying to implement the flip back:
 // get value from array 
  // set its 'matched' property to true
  // 'condition' will refer to whether it's true or false
  const handleMatchCondition = (tile, condition) => {
    const value = mergedImages.find((element) => {
      // 'element' is the iterator in 'find' call
      return element.id === tile.id 
    }) 
    const index = mergedImages.findIndex((element) => {
      return element.id === tile.id 
    })
    value.matched = condition;
    const oldState = mergedImages;
    oldState[index] = value;
    setMergedImages(oldState)
  }

   // returning JSX to the page:
  return(
    <div className="App">
      <div className="wrapper">
        <div className="gameboard">
          <OriginalTiles 
            photos={mergedImages} 
            matchCondition={handleMatchCondition} />
        </div>
      </div>
    </div>
  );
}
export default ApiImages;

