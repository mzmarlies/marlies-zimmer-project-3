// MODULES:
import { useEffect, useState } from 'react';
import axios from 'axios';

// COMPONENTS:
import OriginalTiles from './OriginalTiles';
import DuplicateTiles from './DuplicateTiles';
// import HandleClick from './HandleClick';

const ApiImages = () => {

  // array for images from API:
  const [ firstImages, setFirstImages ] = useState([]);

  // array for image copies:
  const [ copiedImages, setCopiedImages ] = useState([]);

  // array to store both copies and originals:
  const [ mergedImages, setMergedImages ] = useState([]);

  // listen for user choice and store matching logic in a function:
//   const [ imageMatch, setImageMatch ] = useState([]);

    // const [flipState, setFlipState] = useState('inactive');

   
  // API call:
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
    //   console.log('first images', firstImages)

      // mapping over the data stored in the first images and accessing the image urls; storing these urls in the setCopiedImages state:
      const copiedImages = firstImages.map((object) => {
        return object.urls.small
      });
      setCopiedImages(copiedImages);
    //   console.log('copied images', copiedImages)

      // merging the two arrays, store in the setMergedImages state:
      const combinedImages = firstImages.concat(copiedImages);
      setMergedImages(mergedImages)
      
        // combinedImages.filter((singleImage) => {
        //     for(let i = 0; i < combinedImages.length; i++) {
                
        //     }
            
        // })

      console.log('these are merged', combinedImages)

    })
    
  }, []);

   // returning JSX to the page:
  return(
    <div className="App">
      <div className="wrapper">
        <div className="gameboard">
          <OriginalTiles photos={firstImages} />
          <DuplicateTiles duplicates={copiedImages} />
        </div>
      </div>
    </div>
  );
}
export default ApiImages;