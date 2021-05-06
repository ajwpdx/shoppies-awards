import React, {useState, useEffect} from 'react'

//components
import Nominations from './layouts/Nominations';
import SearchResults from './layouts/SearchResults';
import TitleHeader from './layouts/TitleHeader';

function App() {
  const [nominations, setNominations] = useState([])

  return (
    <div className="App">
      <TitleHeader/>
      <Nominations nominations={nominations} setNominations={setNominations}/>
      <SearchResults setNominations={setNominations} nominations={nominations}/>

    </div>
  );
}

export default App;
