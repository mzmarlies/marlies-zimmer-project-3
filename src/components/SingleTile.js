import { useState } from "react";

const SingleTile = (props) => {

    const [flipState, setFlipState] = useState(false);

    const handleClick = (value) => {
        if(value.matched === false) {
            props.compareImage(value)
            setFlipState(!flipState)
        }
        setTimeout(() => {
            if(value.matched === false) {
                props.compareImage(value)
                setFlipState(flipState)
            }
        }, 3000);
    }


    let matchedCriteria 
    if(props.onePhoto.match === true){
        matchedCriteria = true
    } else if(flipState === true){
        matchedCriteria = true
    } else {
        matchedCriteria = false
    }

    console.log(props)

    return(
        <div 
            className="box"
            onClick={() => {handleClick(props.onePhoto)}}
        >

            <div className={matchedCriteria ? 'active' : 'inactive'}>
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