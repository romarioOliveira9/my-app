import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <strong> BRANCH DEV</strong>
        <p>
          Primeiro Comentário 
        </p>
        <p>
          Segundo Comentário 
        </p>
        <p>
          Terceiro Comentário 
        </p>
        <p>
          Quarto Comentário
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
