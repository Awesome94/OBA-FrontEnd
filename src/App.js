import React, { Component } from 'react';
import './App.css';
import AuthComponent from './components/Authentication/AuthComponent';
import RegisterBusinessComponent from './components/RegisterBusiness/RegisterBusinessComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterBusinessComponent/>
      </div>
    );
  }
}

export default App;
