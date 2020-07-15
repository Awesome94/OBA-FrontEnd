import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BusinessList from '../Businesses/BusinessList';

import './action.css';
import { userActions } from '../../_actions';

const ActionPage = () => {
  const dispatch = useDispatch();

  const setRegisterFlow = () => {
    dispatch(userActions.setRegisterBusiness());
  };

  return (
    <div className="actionPageContainer">
      <div className="regButton">
        <Link to="/register">
          <Button onClick={setRegisterFlow()} color="bg-primary" size="lg" active> Register Business</Button>
        </Link>
      </div>
      <div>
        <BusinessList />
      </div>
    </div>
  );
};

export default ActionPage;
