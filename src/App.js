import React from 'react'

//components
import Nominations from './layouts/Nominations';
import SearchResults from './layouts/SearchResults';
import TitleHeader from './layouts/TitleHeader';

function App() {
  return (
    <div className="App">
      <TitleHeader/>
      <Nominations/>
      <SearchResults/>

    </div>
  );
}

export default App;
