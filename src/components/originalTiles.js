import { useState, useEffect } from "react";


let classes = 'inactive'


const OriginalTiles = (props) => {
    // const [userChoice, setUserChoice] = useState([]);

    // useEffect(() => {
        
    // }, []);

    // const handleFirstChoice = (event) => {
    //     setUserChoice(event.target.value);
    //     console.log('user clicked an image from original array');
    //     if(setUserChoice) {
    //         classes += 'active' 
    //     } else {
    //         classes = 'inactive';
    //     }
    // }
    return(
        <>
            {
                props.photos.map((onePhoto) => {
                    return(
                        <div 
                            className="box"
                            key={onePhoto.id}
                            onClick={props.flip}
                            // onClick={handleFirstChoice}
                            // onClick={props.cardFlip}
                            // value={userChoice}
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