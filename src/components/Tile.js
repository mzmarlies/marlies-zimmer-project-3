import { useState, useEffect } from "react";

const Tile = (props) => {
    const [userChoice, setUserChoice] = useState([]);
    const [secondChoice, setSecondChoice] = useState([])

    // let index = 0;

    let classes = 'inactive'
       
    const handleUserChoice = (event) => {
        classes += 'active';
        
        if(userChoice.length < 1) {
            setUserChoice(event.currentTarget.dataset.test)
        } else {
            setSecondChoice(event.currentTarget.dataset.test)
        } 

        if (userChoice === secondChoice) {
            console.log(`it's a match!`)
        } 
        // else {
        //     console.log('try again!')
        // }
        
        // can now compare these two. If they equal each other can do the css animation.
        // className = className + 'class-here'
        //  += adds something to the variable

    
        console.log('user clicked an image')
    }


    return(
        <section className="tile">
            <>
                {
                    props.tiles.map(singlePhoto => {
                        
                        return (
                            <div 
                                onClick={handleUserChoice} 
                                className="box" 
                                key={singlePhoto.id}
                                value={userChoice}
                                data-test={singlePhoto.id} >

                                <div className="inactive"></div>

                                
                                <div className={classes}>
                                    <img src={singlePhoto.urls.small} alt={singlePhoto.alt_description} />
                                </div>
                                
                            </div>
                        )
                    })
                }
            </>   
            
        </section>       
    )
}

// const TileCopies = (props) => {
//     const [copies, setCopies] = useState([])

//     return(
//         TileCopies.push(Tile)
//     )
// }

export default Tile;