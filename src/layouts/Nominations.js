import React from 'react'

import MovieNominated from '../components/MovieNominated'

const Nominations = (props) => {

    

    return(
        <section id="nominations">
            <h2 className='section-title'>Nominations - {props.nominations.length} of 5</h2>
            <div className={props.nominations.length < 5? 'hidden' : 'nominations-banner'}><h3>You have chosen 5 nominations!</h3></div>
            <div className={props.nominations.length < 5 ? 'nominated-movies-container' : 'nominated-movies-container nominations-full'}>
                <div className={props.nominations.length === 0 ? "blank-announcement" : "hidden"}><h3>Search movies below, and add them to this list.</h3></div>
            {props.nominations.map(movie => <MovieNominated key={movie.imdbID} movie={movie} setNominations={props.setNominations} nominations ={props.nominations} />)}
            </div>
        </section>
    )
}

export default Nominations