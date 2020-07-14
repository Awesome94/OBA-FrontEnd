import React, { useState } from 'react';
import './AuthComponent.css';
import SignInComponent from './SignIn/SignInComponent';
import SignUpComponent from './SignUp/SignUpComponent'

const AuthComponent = () => {
    const [classContainer, setClassContainer] = useState(['container'])
  
    const [userData, setuserData] = useState({})

    const OnclickSignUp = () => {
        setClassContainer(['container', 'right-panel-active'])
    }
    const OnClickSignIn = () => {
        setClassContainer(["container"])
    }
    return (
        <div className={classContainer.join(' ')} id="container">
            <SignUpComponent/>
            <SignInComponent />
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>
                            Please login with your personal account info that you signed up with
                        </p>
                        <button className="action ghost" id="signIn" onClick={OnClickSignIn}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hola!</h1>
                        <p>Enter your personal details to get started</p>
                        <button className="action ghost" id="signUp" onClick={OnclickSignUp}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthComponent;