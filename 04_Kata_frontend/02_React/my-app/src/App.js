import './App.css';
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter title="Soy el contador en app" init="0"/>
        {/* <Counter title = "Segundo contador"/> */}
      </header>
    </div>
  );
}

export default App;
