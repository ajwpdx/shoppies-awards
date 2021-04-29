import React, { useState, useEffect } from 'react'
import axios from 'axios'


const SearchResults = (props) => {

    const [nominations, setNominations] = useState([])
    const []

    return (
        <section id="search">
            <h2 className='section-title'>Search Movies</h2>
            <div className='search-area'>
                <form className='search-form'>
                    <input
                        placeholder='Movie Title'
                    />
                </form>
                <div className='movies-list'>

                </div>
            </div>
        </section>
    )
}

export default SearchResults