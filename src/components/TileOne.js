const TileOne = (props) => {
    return(
        <section>
            <h2>this is a test</h2>
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