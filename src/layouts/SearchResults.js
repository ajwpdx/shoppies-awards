import React from 'react'

const SearchResults = (props) => {

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