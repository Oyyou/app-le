import React, { Component } from 'react';
import './App.css';
import Nav from "./components/nav";
import logo from "./content/Apple.png";
import Questions from "./components/questions"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import Home from "./pages/home";
import Facts from "./pages/facts";
import Calculator from './pages/calculator';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/app-le" component={Home} />
          <Route exact path="/app-le/facts" component={Facts} />
          <Route exact path="/app-le/calculator" component={Calculator} />
          <Redirect to="/app-le" />
        </Switch>
      </Router>
      </>
    );
  }
}

export default App;
