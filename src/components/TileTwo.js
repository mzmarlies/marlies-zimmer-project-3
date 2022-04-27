const TileTwo = ({photos}) => {
    return(
        <section>
            {
                <>
                {
                    photos.map(singlePhoto => {
                        return (
                        <div className="photo-container" key={singlePhoto.id}>
                            <img src={singlePhoto.urls.small} alt={singlePhoto.alt_description} />
                        </div>
                        )
                    })
                }
                </>  
            }
        </section>       
    )
}

export default TileTwo;