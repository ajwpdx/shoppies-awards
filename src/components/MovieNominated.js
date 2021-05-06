import React from 'react'

const MovieNominated = (props) => {

    const removeMovie = (evt) => {
        evt.preventDefault()
        const imdbID = props.movie.imdbID
        props.enableBtnContext(imdbID)
        props.setNominations(props.nominations.filter(movie => movie.imdbID !== imdbID))
        
    }

    

return (
    <div className='movie'>
        <img src={props.movie.Poster} alt='movie poster'/>
        <h3>{props.movie.Title}</h3>
        <p>{props.movie.Year}</p>
        <button  onClick={removeMovie}>Remove</button>
    </div>
)
}

export default MovieNominated