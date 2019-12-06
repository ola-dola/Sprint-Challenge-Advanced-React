import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: ""
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
    return (
      <div className="App">
        pol
      </div>
    );
  }
}

export default App;
