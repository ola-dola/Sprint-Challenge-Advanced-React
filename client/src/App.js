import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Players from './Components/Players';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({
          players: response.data
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {
    const {players} = this.state;

    return (
      <div className="App">
        <Players players={players} />
      </div>
    );
  }
}

export default App;
