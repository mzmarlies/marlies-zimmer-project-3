import { useState } from "react";
// import HandleClick from "./HandleClick";
let classes = 'inactive'


const DuplicateTiles = (props) => {
    const [userChoice, setUserChoice] = useState([]);

    const handleSecondChoice = (event) => {
        classes += 'active'
        setUserChoice(event.target.value);
        console.log('user clicked an image from copies array');
    }
    return(
        <>
            {
                props.duplicates.map((index) => {
                    return(
                        <div 
                            // onClick={() => {<HandleClick />}}
                            onClick={handleSecondChoice}
                            className="box"
                            key={index}
                            // value={<HandleClick />}
                            value={userChoice}
                            >
                            <div className={classes}>
                                <div className="tile-cover">
                                    <img src={index} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DuplicateTiles;