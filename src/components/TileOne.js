const TileOne = (props) => {
    return(
        <section className="tile">
            <>
                {
                    props.photos.map(singlePhoto => {
                        return (
                            <div className="box" key={singlePhoto.id}>
                                <div className="image-container">
                                    <img src={singlePhoto.urls.small} alt={singlePhoto.alt_description} />
                                </div>
                                <div className="back"></div>
                            </div>
                        )
                    })
                }
            </>   
            
        </section>       
    )
}

export default TileOne;