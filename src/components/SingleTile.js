import { useState, useEffect } from "react";

const SingleTile = (props) => {

    const [ flipState, setFlipState ] = useState(false);
    const [ matchedCriterion, setMatchedCriterion ] = useState(false)

    useEffect(() => {
        setMatchedCriterion(props.onePhoto.selected)
    }, [props.onePhoto.selected])


    const handleClick = (value) => {
        if(value.matched === false) {
            props.compareImage(value)
            setFlipState(!flipState)
        }
        props.handleTileSelection(value)
    }

    return(
        <div 
            className="box"
            onClick={() => {handleClick(props.onePhoto)}}
        >
            <div className={ matchedCriterion ? 'active' : 'inactive'}>
                <div className="tile-cover">
                    <img 
                        src={props.onePhoto.urls.small} 
                        alt={props.onePhoto.alt_description} 
                        key={props.onePhoto.id} 
                    />
                </div>
            </div>          
        </div>
    )
}

export default SingleTile;