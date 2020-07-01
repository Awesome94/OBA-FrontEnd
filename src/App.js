import React, { Component } from 'react';
import './App.css';
import AuthComponent from './components/Authentication/AuthComponent';
import RegisterBusinessComponent from './components/RegisterBusiness/RegisterBusinessComponent'
import UploadFileComponent from './components/UploadFile/UploadComponent/UploadFileComponent'
import DashboardComponent from './components/Dashboard/Dashboard'
class App extends Component {
  render() {
    return (
      <div className="App">
        <DashboardComponent/>
        </div>
    );
  }
}

export default App;

