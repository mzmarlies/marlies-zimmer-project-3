import { useState } from "react";

import SecondSingle from './SecondSingle'

let classes = 'inactive'


const DuplicateTiles = (props) => {
    return(
        <>
            {
                props.duplicates.map((index) => {
                    return(
                       <SecondSingle index={index} key={index}/>
                    )
                })
            }
        </>
    )
}

export default DuplicateTiles;