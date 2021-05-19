import { CounterProvider } from '../context/counterContext'; 
import Contador from './Contador';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Contador/>
      </CounterProvider>
    </div>
  );
}

export default App;
