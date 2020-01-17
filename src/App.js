import React, { Component } from 'react';
import './App.css';
import logo from "./content/Apple.png";
import Questions from "./components/questions"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colour: "",
      day: "",
      soup: "",
      result: "",
      errors: {
        colour: "",
        day: "",
        soup: "",
      }
    };

    this.updateColour = this.updateColour.bind(this);
    this.updateDay = this.updateDay.bind(this);
    this.updateSoup = this.updateSoup.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  updateColour(e) {
    this.setState(
      { colour: e.target.value }
    )
  }

  updateDay(e) {
    this.setState(
      { day: e.target.value }
    )
  }

  updateSoup(e) {
    this.setState(
      { soup: e.target.value }
    )
  }

  getResult(e) {
    e.preventDefault();

    let colourError = this.state.colour.length < 2;
    let dayError = this.state.day.length < 2;
    let soupError = this.state.soup.length < 2;

    this.setState((state, props) => ({
      errors: {
        colour: colourError ? "Doesn't look like a colour, buddy" : "",
        day: dayError ? "I don't think that's a day, fren" : "",
        soup: soupError ? "(Soup)! Sounds tasty.." : "",
      },
      result: "",
    }));

    let isError = colourError || dayError || soupError;

    if (!isError) {
      let a = this.state.colour.substr(0, 3);
      let b = this.state.day.substr(3, 2);
      let c = this.state.soup.substr(this.state.soup.length - 2);

      this.setState((state, props) => ({
        result: `You're a ${(a + b + c)}!`,
      }));
    }
  }

  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Always wondered what type of apple you were?<br/>
            Today is the day you find out!
          </p>
        </header>
        <Questions props={this}/>
        <p className="result">{this.state.result}</p>
      </div>
      </>
    );
  }
}

export default App;
