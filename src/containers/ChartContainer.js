import React, { useEffect, useState } from "react";
import SongList from "../components/SongList";

const ChartContainer = () => {
    
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])
 

    const getSongs = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(chart => setSongs(chart.feed.entry))
    }
    
    return (
        <>
            <h1>Chartistry</h1>
            <SongList songs={songs}/>
        </>

    )
}

export default ChartContainer;