let classes = 'inactive'

const DuplicateTiles = (props) => {
    return(
        <>
            {
                props.duplicates.map((index) => {
                    return(
                        <div 
                            className="box"
                            key={index}>
                            <div className={classes}>
                                <img src={index} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DuplicateTiles;