import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../_actions/user.actions';

const SignUpComponent = () => {
  const [submitted, setSubmitted] = useState(false);
  const firstname = useFormInput('');
  const lastname = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(userActions.logout());
    const authError = localStorage.getItem('error');
    if (authError) {
      setError(authError);
    }
  }, []);

  const handleRegistration = (e) => {
    e.preventDefault();
    localStorage.removeItem('error');
    setSubmitted(true);
    if (firstname && lastname && email && password) {
      dispatch(userActions.register({
        firstname: firstname.value, lastname: lastname.value, email: email.value, password: password.value,
      }));
    }
  };
  return (
    <div className="form-container sign-up-container">
      <form className="auth" onSubmit={handleRegistration}>
        <h1>Create Account</h1>
        <input className="auth" type="text" {...firstname} placeholder="First name" />
        <input className="auth" type="text" {...lastname} placeholder="Last name" />
        <input className="auth" type="text" {...email} placeholder="Email address" />
        <input className="auth" type="password" {...password} placeholder="Password" />
        <span className="error">{localStorage.getItem('error')}</span>
        <button className="action">Sign Up</button>
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

export default SignUpComponent;
