import React, { useEffect, useState } from "react";
import GenreSelector from "../components/GenreSelector";
import SongList from "../components/SongList";

const ChartContainer = () => {
    
    const genreList = [
        {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
        {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
        {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
        {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"} 
    ]
    const [songs, setSongs] = useState([]);
    const [genres, setGenres] = useState(genreList);
    const [selectedGenre, setSelectedGenre] = useState(genres[0]);
    
    const onGenreSelected = (genre) => {
        setSelectedGenre(genre);
    } 
    
    // useEffect(() => {
    //     getSongs();
    // }, [])
    
    useEffect(() => {
        getSongs();
    }, [selectedGenre])
    

    const getSongs = () => {
        fetch(selectedGenre.url)
        .then(response => response.json())
        .then(chart => setSongs(chart.feed.entry))
    }
    
    return (
        <>
            <h1>Chartistry</h1>
            <GenreSelector genres={genres} onGenreSelected={onGenreSelected} />
            <SongList songs={songs}/>

        </>

    )
}

export default ChartContainer;