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