import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CounterProvider } from '../context/counterContext'; 
import { CharacterProvider } from '../context/CharacterContext';
import Character from './Character';
import Contador from './Contador';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/contador">
              <Contador/>
            </Route>
            <Route exact path="/character">
              <CharacterProvider>
                <Character/>
              </CharacterProvider>
            </Route>
          </Switch>
        </BrowserRouter>
      </CounterProvider>
    </div>
  );
}

export default App;
