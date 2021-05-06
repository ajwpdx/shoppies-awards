import React, { useState } from 'react'
import axios from "axios"

import MovieSearch from '../components/MovieSearch'

const SearchResults = (props) => {
    const [searchText, setSearchText] = useState("")
    const [searchList, setSearchList] = useState([])
    const [loading, isLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const onSearchTextChange = (evt) =>{
        setSearchText(evt.target.value)
    }

    const onSearchSubmit = (evt) => {
        evt.preventDefault()
        isLoading(true)
        axios.get(`http://www.omdbapi.com/?apikey=66b9867&s=${searchText}`)
        .then(res=> {
            isLoading(true)
            if (res.data.Search !== undefined){
                setSearchList(res.data.Search)
                setErrorMsg("")
            } else{
                setErrorMsg("That search term is either too short or there is no movie that has it in its title. Try another word.")
            }
            
            console.log(res.data.Search)
            isLoading(false)
        }
            )
        .catch(err => console.log("error ->", err))
        isLoading(false)

    }

    return (
        <section id="search">
            <h2 className='section-title'>Search Movies</h2>
            <div className='search-area'>
                <form className='search-form' onSubmit={onSearchSubmit}>
                    <input
                        placeholder='Movie Title'
                        type="search" 
                        results="0"
                        value={searchText}
                        onChange={onSearchTextChange}
                    />
                    <button>Search</button>
                </form>
                <div className='movies-list'>
                    <div className={errorMsg === "" ? "hidden" : 'error-msg'}><h3>{errorMsg}</h3></div>
                {searchList.map(movie => { 
                return (<MovieSearch movie={movie} key={movie.imdbID} setNominations={props.setNominations} nominations={props.nominations}/>)})}
                </div>
            </div>
        </section>
    )
}

export default SearchResults