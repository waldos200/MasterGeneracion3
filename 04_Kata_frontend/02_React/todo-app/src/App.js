import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import HolaMundo from './components/HolaClass';
import HolaMundoClass from './components/HolaMundo';

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
            <Redirect push to="/otFound" />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
