let classes = 'inactive'


const OriginalTiles = (props) => {
    return(
        <>
            {
                props.photos.map((onePhoto) => {
                    return(
                        <div 
                            className="box"
                            key={onePhoto.id}
                        >
                            <div className={classes}>
                                <img src={onePhoto.urls.small} alt={onePhoto.alt_description} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default OriginalTiles;
// {
// props.tiles.map(singlePhoto => {
    
//     return (
//         <div 
//             onClick={handleUserChoice} 
//             className="box" 
//             key={singlePhoto.id}
//             value={userChoice}
//             data-test={singlePhoto.id} >

//             <div className="inactive"></div>

            
//             <div className={classes}>
//                 <img src={singlePhoto.urls.small} alt={singlePhoto.alt_description} />
//             </div>
            
//         </div>
//     )
// })
// }