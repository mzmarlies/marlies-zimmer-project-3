import { useState, useEffect } from "react";

import SingleTile from './SingleTile'

let classes = 'inactive'


const OriginalTiles = (props) => {
    return(
        <>
            {
                props.photos.map((onePhoto) => {

                    return(
                       <SingleTile onePhoto={onePhoto} key={onePhoto.id}/>
                    )
                })
            }
        </>
    )
}

export default OriginalTiles;