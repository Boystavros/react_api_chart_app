import React from "react";

const GenreSelector = ({genres, onGenreSelected}) => {
    
    const handleChange = ((event) => {
        const chosenGenre = genres[event.target.value];
        onGenreSelected(chosenGenre);
    })
    
    const genreOptions = genres.map((genre, index) => {
        return <option value={index} key={index}>{genre.name}</option>
    })
    
    return (
        <select defaultValue="0" onChange={handleChange}>
            {genreOptions}
        </select>
    ) 
}

export default GenreSelector;