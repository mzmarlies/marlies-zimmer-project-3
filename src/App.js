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
        <ApiImages />
        <h1>Memory Game</h1>
        <h2>Flip the tiles to find a matching set!</h2>
      </header>
    </div>
  );
}


export default App;


