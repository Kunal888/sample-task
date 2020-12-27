import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Screen1} />
        <Route exact path="/screen1" component={Screen1} />
        <Route exact path="/screen2" component={Screen2} />
      </Switch>
    </Router>
  );
}

export default App;
