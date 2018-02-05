import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">

        <header className="App-header">
          <div className="row">
            <div className="col-md-12">
              <h1 className="App-title">Site em construção</h1>
            </div>
          </div>
          
        </header>
        <div className="App-gif-body">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="row">
          <div className="col-md-12">
              <p>Ja já estaremos ON FIRE! </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
