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
      <Nominations/>
      <SearchResults/>

    </div>
  );
}

export default App;
