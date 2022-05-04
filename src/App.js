// STYLES:
import './styles/sass/App.scss';
// COMPONENTS:
import ApiImages from './components/ApiImages';

function App() {

  // returning JSX to the page:
  return(
    <div className="App">
      <div className="full-page">
        <div className="content">
          <header>
              <h1>Memory Test</h1>
              <h2>Click the tiles to find a matching set!</h2>
          </header>
          <ApiImages />
        </div>
        <footer>
          <a href="https://junocollege.com">Created at Juno College</a>
        </footer>
      </div>
    </div>
  );
}


export default App;


