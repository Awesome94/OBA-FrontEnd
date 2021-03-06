import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';

import { userActions } from '../../../_actions';

const SignInComponent = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.logout());
    const authError = localStorage.getItem('error');
    if (authError) {
      setError(authError);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.removeItem('error');
    setSubmitted(true);
    if (email && password) {
      dispatch(userActions.login(email.value, password.value));
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form className="auth" onSubmit={handleLogin}>
        <h1>Sign In</h1>
        <span>to use your OBA-Analyzer account</span>
        <span className="error">{error}</span>
        <input className="auth" type="email" {...email} placeholder="Email address" />
        <input className="auth" type="password" {...password} placeholder="Password" />
        <button className="action">Sign In</button>
      </form>
    </div>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};
export default SignInComponent;
