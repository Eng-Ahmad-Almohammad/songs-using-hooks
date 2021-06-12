import React from 'react'

const SongDetails = (props) =>{
    
    return(
        <div>
            <h3>
                Detalis For :
            </h3>
            <p>
                Title : {props.song.title}
                <br />
                Length: {props.song.duration}
            </p>
           
        </div>
    )
}

export default SongDetails