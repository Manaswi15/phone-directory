import React, { Component } from 'react';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <button>Add</button><br/>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Type here"></input><br/>
        <label>Phone:</label>
      <input type="text"></input>
      </div>
    );
  }
}

export default App;
