import React from 'react';


const SongsList = (props) => {
   
    return(
        <div className = 'ui divided list'>

       
        {props.listOfSongs.map( song => {
           return( 
           <div className = 'item' key ={song.title}>
                <div className= 'right floated content'>
                     
                <button className = 'ui button primary' onClick = {() =>{props.updateState(song)}}> Select </button>

                </div>
                <div className = 'content'>
                    {song.title}
                </div>
            </div>
           )
        })}
     </div>
    )
};


export default SongsList;