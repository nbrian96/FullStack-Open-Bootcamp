import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Gretingfuntion from './components/pure/gretingFuntion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Componente propio Gretting.jsx */}
        {/* <Greeting name="Nisum"></Greeting> */}

        <Gretingfuntion name="Nisum"></Gretingfuntion>
      </header>
    </div>
  );
}

export default App;
