import React from 'react';

const SignInComponent = (props) => {
    return (
        <div className="form-container sign-in-container">
            <form className="auth">
                <h1>Sign In</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                </div>
                <span>or use your account</span>
                <input className="auth" type="email" placeholder="Email address" />
                <input className="auth" type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button className="action">Sign In</button>
            </form>
        </div>
    )
} 
export default SignInComponent;