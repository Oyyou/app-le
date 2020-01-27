import React, { Component } from 'react';
import './App.css';
import Nav from "./components/nav";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from "./pages/home";
import Facts from "./pages/facts";
import Calculator from './pages/calculator';
import HallOfFame from './pages/hall-of-fame';

class App extends Component {

  render() {
    return (
      <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/app-le/" component={Home} />
          <Route exact path="/app-le/facts" component={Facts} />
          <Route exact path="/app-le/calculator" component={Calculator} />
          <Route exact path="/app-le/hall-of-fame" component={HallOfFame} />
          <Redirect to="/app-le/" />
        </Switch>
      </Router>
      </>
    );
  }
}

export default App;
