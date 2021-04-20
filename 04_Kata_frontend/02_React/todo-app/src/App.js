import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import Character from './components/Characters';
import CharacterHook from './components/CharactersHook';
import CicloDeVida from './components/CicloDeVida';
import CounterHook from './components/Counter';
import HolaMundo from './components/HolaClass';
import HolaMundoClass from './components/HolaMundo';
import Reloj from './components/RelojWithHook';

const NotFound = () => {
  return <h2> Not Found </h2>
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <HolaMundo texto="Hola soy un stateless component"/>
            </Route>
            <Route exact path="/class" component={HolaMundoClass}/>
            <Route exact path="/notFound" render={()=><NotFound/>}/>
            <Route exact path="/lifeCycle" component={CicloDeVida}/>
            <Route exact path="/characters" component={Character}/>
            <Route exact path="/counterHook" component={CounterHook}/>
            <Route exact path="/characterHook" component={CharacterHook}/>
            <Route exact path="/relojWithHook" component={Reloj}/>
            <Redirect push to="/notFound" />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
