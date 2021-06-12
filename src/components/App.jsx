import React from 'react';
import {useState} from 'react';

import SongsList from './SongsList'
import SongDetails from './SongDetails'
const App = () => {
    const [selectedSong , setSelectedSong] = useState({title : 'No Scrubs' , duration : '4.05'})


    const listOfSongs = [
        {title : 'No Scrubs' , duration : '4.05'},
        {title : 'Macarena' , duration : '2:30'},
        {title : 'All Star' , duration : '3:15'},
        {title : 'I Want it That Way' , duration: '1:45'},
    ]


    const updateState = (song) =>{
        setSelectedSong(song)
    }

    return (
        <div className = 'ui container grid'>
            <div className = 'ui row'>
                <div className = 'column eight wide'>
                <SongsList updateState = {updateState} listOfSongs = {listOfSongs} />
                </div>
            <div className = 'column eight wide'>
                <SongDetails song = {selectedSong} />
            </div>
            </div>
        </div>
    )
};

export default App;