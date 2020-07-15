import React, { useEffect } from 'react';
import {
  Redirect, Router, Route, Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from './helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './components/Privacy';

import Navigation from './components/Navigation/Navigation';
import AuthComponent from './components/Authentication/AuthComponent';
import RegisterBusinessComponent from './components/RegisterBusiness/RegisterBusinessComponent';
import DashboardComponent from './components/Dashboard/Dashboard';
import ActionPage from './components/ActionPage/ActionPage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Router history={history}>
        <Switch>
          <Route path="/auth" component={AuthComponent} />
          <PrivateRoute exact path="/" component={ActionPage} />
          <PrivateRoute exact path="/register" component={RegisterBusinessComponent} />
          <PrivateRoute exact path="/dashboard" component={DashboardComponent} />
          <Route component={Error} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
