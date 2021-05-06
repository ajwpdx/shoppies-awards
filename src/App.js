import React, {useState, useEffect} from 'react'

//components
import Nominations from './layouts/Nominations';
import SearchResults from './layouts/SearchResults';
import TitleHeader from './layouts/TitleHeader';

const initialNominations = JSON.parse(localStorage.getItem("nominations") || "[]")

function App() {
  const [nominations, setNominations] = useState(initialNominations)
  const [removedMovieId, setRemovedMovieId] = useState()

  const enableBtnContext = (movieId) => {
    setRemovedMovieId(movieId) 
  }

  useEffect(()=>{
    localStorage.setItem("nominations", JSON.stringify(nominations))
  }, [nominations])


  return (
    <div className="App">
      <TitleHeader/>
      <Nominations nominations={nominations} setNominations={setNominations} enableBtnContext={enableBtnContext}/>
      <SearchResults setNominations={setNominations} nominations={nominations} removedMovieId={removedMovieId} />

    </div>
  );
}

export default App;
