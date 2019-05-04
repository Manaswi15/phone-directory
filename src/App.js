import React, { Component } from 'react';
import Header from './Header';
import './App.css';


class App extends Component {

  /*let subscribers = [
      {
        id: 1,
        name: "Shilpa Bhat",
        phone: "8888888888"
      },
      {
        id: 2,
        name: "Srishti Gupta",
        phone: "9999999999"
      }
    ];*/

    construtcor() {

      super();
      this.state = {
        subscribersListToShow:[]
      }

    }

  clickHandler(message)
    {
      alert(message);
    }

  render() {
   
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            this.subscribersListToShow.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this,"Delete button clicked")}>Delete</button>
                </span>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
