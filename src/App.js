import './App.css';
import Dictaphone from './Recording';
import Say from './Say';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictaphone />
        <Say/>
      </header>
    </div>
  );
}

export default App;
