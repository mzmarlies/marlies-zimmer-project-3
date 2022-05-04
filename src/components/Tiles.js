import { useState} from "react";

import SingleTile from './SingleTile'

const Tiles = (props) => {

    const [ dataComparison, setDataComparison ] = useState([])
    
    const compareSelection = (data) => {
        // function variables: 
        const oldState = dataComparison;
        // one-off functions:
        const index = oldState.findIndex((element) => element.id === data.id )

        // will return -1 if it doesnt exist, but will give us a valid position if it does exist
        // will prevent a double click 'match'
        if(index === -1 && dataComparison.length < 2) {
            oldState.push(data);
        }
        
        setDataComparison(oldState);
        
        if (dataComparison.length === 2) {
            if(dataComparison[0].urls.full === dataComparison[1].urls.full) {
                // set interval optional to have 
                props.matchCondition(dataComparison[0], true);
                props.matchCondition(dataComparison[1], true);
                // once conditions are true, clear it out
                setDataComparison([]);
            } else {
                props.matchCondition(dataComparison[0], false);
                props.matchCondition(dataComparison[1], false);
                props.tileCondition(dataComparison[0]);
                props.tileCondition(dataComparison[1]);
                setDataComparison([]);
            }
        } 
    }

    const handleTileSelection = (data) => props.tileCondition(data);

    return(
        <>
            {
                props.photos.map((onePhoto) => {
                    return(
                       <SingleTile 
                        compareImage={compareSelection} 
                        handleTileSelection={handleTileSelection}
                        key={onePhoto.id}
                        onePhoto={onePhoto} 
                        />
                    )
                })
            }
        </>
    )
}

export default Tiles;
