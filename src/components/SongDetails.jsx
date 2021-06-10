import React from 'react'

const SongDetails = (props) =>{
    
    return(
        <div>
            <h1>
                Detalis For :
            </h1>
            <h2>
                Title : {props.song.title}
            </h2>
            <h2>
                Length: {props.song.duration}
            </h2>
        </div>
    )
}

export default SongDetails