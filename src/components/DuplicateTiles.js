import { useState } from "react";
// import HandleClick from "./HandleClick";
let classes = 'inactive'


const DuplicateTiles = (props) => {
    // const [userChoice, setUserChoice] = useState([]);

    // const handleSecondChoice = (event) => {
    //     setUserChoice(event.target.value);
    //     console.log('user clicked an image from copies array');
    //      if(setUserChoice) {
    //         classes += 'active' 
    //     } else {
    //         classes = 'inactive';
    //     }
    // }
    return(
        <>
            {
                props.duplicates.map((index) => {
                    return(
                        <div 
                            // onClick={() => {<HandleClick />}}
                            onClick={props.flip}
                            className="box"
                            key={index}
                            // value={<HandleClick />}
                            // value={userChoice}
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