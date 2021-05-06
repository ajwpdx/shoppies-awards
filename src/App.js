import React, {useState, useContext} from 'react'

//components
import Nominations from './layouts/Nominations';
import SearchResults from './layouts/SearchResults';
import TitleHeader from './layouts/TitleHeader';

function App() {
  const [nominations, setNominations] = useState([])
  const [removedMovieId, setRemovedMovieId] = useState()

  const enableBtnContext = (movieId) => {
    setRemovedMovieId(movieId) 
  }


  return (
    <div className="App">
      <TitleHeader/>
      <Nominations nominations={nominations} setNominations={setNominations} enableBtnContext={enableBtnContext}/>
      <SearchResults setNominations={setNominations} nominations={nominations} removedMovieId={removedMovieId} />

    </div>
  );
}

export default App;
