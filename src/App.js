import React, { Component } from 'react';

import './App.css';
import Navigation from './components/Navigation/Navigation'
import AuthComponent from './components/Authentication/AuthComponent';
import RegisterBusinessComponent from './components/RegisterBusiness/RegisterBusinessComponent'
import UploadFileComponent from './components/UploadFile/UploadComponent/UploadFileComponent'
import DashboardComponent from './components/Dashboard/Dashboard';
import ActionPage from './components/ActionPage/ActionPage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            Navigation / >
            <
            ActionPage / >
            <
            /div>
        );
    }
}

export default App;