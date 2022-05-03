import { useState } from "react";

const SecondSingle = (props) => {

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
                    <img src={props.index} key={props.index} alt='photo of animal' />
                </div>
            </div>
            
            
        </div>
    )
}

export default SecondSingle;