import React, { useState, useEffect } from 'react'


const MovieSearch = (props) => {
    const [disableBtn, setdisableBtn] = useState(false)

    useEffect(() => {
        props.nominations.forEach(nominatedMovie => {
            if (nominatedMovie.imdbID === props.movie.imdbID){
                setdisableBtn(true)
            }

        })
    }, [props.nominations, props.movie])

    useEffect(() => {
        if(props.movie.imdbID === props.removedMovieId){
            setdisableBtn(false)
        }
    }, [props.removedMovieId, props.movie])

    const nominateMovie = (evt) =>{
        evt.preventDefault()
        props.setNominations([props.movie, ...props.nominations])
    }

return (
    <div className='movie'>
        <img src={props.movie.Poster} alt='movie poster'/>
        <h3>{props.movie.Title}</h3>
        <p>{props.movie.Year}</p>
        <button type='button' disabled={disableBtn} onClick={nominateMovie}>Nominate</button>
    </div>
)
}

export default MovieSearch