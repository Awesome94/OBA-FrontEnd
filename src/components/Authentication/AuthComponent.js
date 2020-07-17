import React, { useState } from 'react';
import './AuthComponent.css';
import SignInComponent from './SignIn/SignInComponent';
import SignUpComponent from './SignUp/SignUpComponent';

const AuthComponent = () => {
  const [classContainer, setClassContainer] = useState(['authContainer']);

  const [userData, setuserData] = useState({});

  const OnclickSignUp = (e) => {
    e.preventDefault();
    setClassContainer(['authContainer', 'right-panel-active']);
    localStorage.removeItem('error');
  };
  const OnClickSignIn = (e) => {
    e.preventDefault();
    setClassContainer(['authContainer']);
    localStorage.removeItem('error');
  };
  return (
    <div className={classContainer.join(' ')} id="authContainer">
      <SignUpComponent />
      <SignInComponent />
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              Please login with your personal account info that you signed up with
            </p>
            <button className="action ghost" id="signIn" onClick={(e) => { OnClickSignIn(e); }}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hola!</h1>
            <p>Enter your personal details to get started</p>
            <button className="action ghost" id="signUp" onClick={(e) => { OnclickSignUp(e); }}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
