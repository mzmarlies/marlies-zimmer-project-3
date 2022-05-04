import { useState} from "react";

import SingleTile from './SingleTile'

const OriginalTiles = (props) => {

    const [ dataComparison, setDataComparison ] = useState([])
    
    const compareSelection = (data) => {
        // function variables: 
        const oldState = dataComparison;
        // one-off functions:
        const index = oldState.findIndex((element) => {
           return element.id === data.id   
        })

        // will return -1 if it doesnt exist, but will give us a valid position if it does exist
        // will prevent a double click 'match'
        if(index === -1 && dataComparison.length < 2) {
            oldState.push(data);
        }
        

        setDataComparison(oldState);
        
        if (dataComparison.length === 2) {
            console.log(dataComparison)
            if(dataComparison[0].urls.full === dataComparison[1].urls.full) {
                // set interval optional to have 
                console.log('matched')
                props.matchCondition(dataComparison[0], true);
                props.matchCondition(dataComparison[1], true);
                // once cniditons are true, clear it out
                alert('You found the match!')
                setDataComparison([]);

            } else {
                console.log('not matched');
                props.matchCondition(dataComparison[0], false);
                props.matchCondition(dataComparison[1], false);
                setDataComparison([]);
            }
        } 

    }
    return(
        <>
            {
                props.photos.map((onePhoto) => {
                    return(
                       <SingleTile 
                        compareImage={compareSelection} 
                        onePhoto={onePhoto} 
                        key={onePhoto.id}/>
                    )
                })
            }
        </>
    )
}

export default OriginalTiles;
