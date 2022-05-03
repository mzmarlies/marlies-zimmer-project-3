import { useState } from "react";

const SingleTile = (props) => {

    const [flipState, setFlipState] = useState('inactive');

    const handleClick = () => {
      console.log(flipState)
    if(flipState === 'inactive') {
        setFlipState('active')
    } else {
        setFlipState('inactive')
    }
  }
    return(
        <div 
            className="box"
            onClick={handleClick}
        >

            <div className={flipState}>
                <div className="tile-cover">
                    <img src={props.onePhoto.urls.small} alt={props.onePhoto.alt_description} key={props.onePhoto.id} />
                </div>
            </div>
            
            
        </div>
    )
}

export default SingleTile;