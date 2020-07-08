import React, { Component, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';

import {history} from '../src/helpers';
import {alertActions} from '../src/_actions';
import {PrivateRoute} from '../src/components/Privacy';


import Navigation from './components/Navigation/Navigation'
import AuthComponent from './components/Authentication/AuthComponent';
import RegisterBusinessComponent from './components/RegisterBusiness/RegisterBusinessComponent'
import DashboardComponent from './components/Dashboard/Dashboard';
import ActionPage from './components/ActionPage/ActionPage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(()=>{
    history.listen((location, action)=>{
      dispatch(alertActions.clear());
    });
  }, []);
    render() {
        return ( 
            <BrowserRouter>
              <div className="App">
                <Navigation/>
                <Router history={history}>
                  <Switch>
                      <Route path="/" component={ActionPage} exact />
                      <Route path="/register" component={RegisterBusinessComponent} />
                      <Route path="/dashboard" component={DashboardComponent} />
                      <Route path="/auth" component={AuthComponent} />
                      <Route component={Error} />
                      <Redirect from="*" to="/" />
                  </Switch>
                </Router>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;