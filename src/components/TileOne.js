const TileOne = (props) => {
    return(
        <section>
                <>
                {
                    props.photos.map(singlePhoto => {
                        return (
                        <div key={singlePhoto.id}>
                            <img src={singlePhoto.urls.small} alt={singlePhoto.alt_description} />
                        </div>
                        )
                    })
                }
                </>   
            
        </section>       
    )
}

export default TileOne;