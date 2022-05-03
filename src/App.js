// STYLES:
import './styles/sass/App.scss';
// MODULES:
import { useState } from 'react';
// COMPONENTS:
import ApiImages from './components/ApiImages';

function App() {

  


  // returning JSX to the page:
  return(
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <h2>Test your memory by clicking the tiles to find a matching set!</h2>
        <ApiImages />
      </header>
      <footer><a href="https://junocollege.com">Created at Juno College</a></footer>
    </div>
  );
}


export default App;


