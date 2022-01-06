import React from "react";

const SongList = ({songs}) => {
    
    const songsItems = songs.map((song, index) => {
        return <li song={song} key={index}>Chart Position: {index + 1}, Title - Artist: {song.title.label}</li>
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