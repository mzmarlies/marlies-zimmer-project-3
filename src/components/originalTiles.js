import { useState } from "react";

let classes = 'inactive'


const OriginalTiles = (props) => {
    const [userChoice, setUserChoice] = useState([]);

    const handleFirstChoice = (event) => {
        classes += 'active'
        setUserChoice(event.target.value);
        console.log('user clicked an image from original array');
    }
    return(
        <>
            {
                props.photos.map((onePhoto) => {
                    return(
                        <div 
                            className="box"
                            key={onePhoto.id}
                            onClick={handleFirstChoice}
                            value={userChoice}
                        >
                            <div className={classes}>
                                <div className="tile-cover">
                                    <img src={onePhoto.urls.small} alt={onePhoto.alt_description} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default OriginalTiles;