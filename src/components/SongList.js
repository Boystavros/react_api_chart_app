import React from "react";

const SongList = ({songs}) => {
    
    const songsItems = songs.map((song, index) => {
        return ( 
            <>
                <li song={song} key={index}>No.{index + 1}:  {song.title.label}</li>
                <hr/>
            </>
        )
    })
    
    return (
        <>
            <ul>
                {songsItems}
            </ul>
        </>
    )
}

export default SongList;