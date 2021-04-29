import React, { useState, useEffect } from 'react'
import axios from "axios"


const SearchResults = (props) => {
    const [searchText, setSearchText] = useState("")
    const [searchList, setSearchList] = useState([])

    const onSearchTextChange = (evt) =>{
        setSearchText(evt.target.value)
    }

    // useEffect(()=>{

    // }, [searchText])

    const onSearchSubmit = (evt) => {
        evt.preventDefault()
        axios.get(`http://www.omdbapi.com/?apikey=66b9867&s=${searchText}`)
        .then(res=> console.log(res.data))
        .catch(err => console.log("error ->", err))
        

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
                    <button >Search</button>
                </form>
                <div className='movies-list'>

                </div>
            </div>
        </section>
    )
}

export default SearchResults