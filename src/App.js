import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Avengers from './AvengersComponent'

class App extends Component {
  constructor() {
    super()
    this.state = {
      avengers: [
        {
          character: "Captain America",
          realName: "Steven Rogers"
        },
        {
          character: "Iron Man",
          realName: "Tony Stark"
        },
        {
          character: "Hulk",
          realName: "Bruce Banner"
        },
        {
          character: "Black Panther",
          realName: "T'Challa"
        },
        {
          character: "Spiderman",
          realName: "Peter Parker"
        },
        {
          character: "Hawkeye",
          realName: "Clinton Barton"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Avengers: By Yusuf Nafey
          </p>
          <Avengers 
            avengersData={this.state.avengers}
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
