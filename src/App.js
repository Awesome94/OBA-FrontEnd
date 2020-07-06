import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import AuthComponent from './components/Authentication/AuthComponent';
import RegisterBusinessComponent from './components/RegisterBusiness/RegisterBusinessComponent'
import DashboardComponent from './components/Dashboard/Dashboard';
import ActionPage from './components/ActionPage/ActionPage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return ( 
            <BrowserRouter>
              <div className="App">
                <Navigation/>
                <main>
                  <Switch>
                      <Route path="/" component={ActionPage} exact />
                      <Route path="/register" component={RegisterBusinessComponent} />
                      <Route path="/dashboard" component={DashboardComponent} />
                      <Route path="/auth" component={AuthComponent} />
                      <Route component={Error} />
                  </Switch>
                </main>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;