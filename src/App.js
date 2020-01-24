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
          <Route exact path="/" component={Home} />
          <Route exact path="/facts" component={Facts} />
          <Route exact path="/calculator" component={Calculator} />
        </Switch>
      </Router>
      </>
    );
  }
}

export default App;
