import React from 'react';

const SignUpComponent = () => {
    return (
        <div className="form-container sign-up-container">
            <form className="auth">
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input className="auth" type="text" placeholder="First name" />
                <input className="auth" type="text" placeholder="Last name" />
                <input className="auth" type="text" placeholder="Email address" />
                <input className="auth" type="password" placeholder="Password" />
                <button className="action">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpComponent;