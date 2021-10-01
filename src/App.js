import logo from './logo.svg';
import './App.css';
import juan from './juAN.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         ¡hola compi, bienvenido a myMusicplaye
        </p>
        <input type="text"></input>
        <input type="password"></input>
        <input type="button" value="ingresar"></input>
        <h1>recomiendanos a tus compis</h1>
        <h5>terminos y condiciones</h5>
        
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
