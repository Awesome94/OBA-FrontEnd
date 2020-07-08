import React, {useState} from 'react';
import {authHeader} from '../../../helpers/auth-header';
import {useHistory} from "react-router-dom";


const SignInComponent = (props) => {
    const [Loading, setLoading] = useState(false);
    const username  = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null)
    let history = useHistory();
    
    const handleLogin=()=>{
        const apiUrl = "http://127.0.0.1:5000/login"
        const payload = JSON.stringify({ email: username.value, password: password.value})
        fetch(apiUrl, {
            method: 'post',
            headers: { "Content-type": "application/json; charset=UTF-8"
        }, 
        body: payload
        })
        .then(res=>res.json())
        .then(function (res) {
            console.log(res)
            authHeader(res.token)
            debugger
            props.history.push('/')
        })
        .catch(function (error) {
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
            console.log(error)
        });
    }


    return (
        <div className="form-container sign-in-container">
            <form className="auth">
                <h1>Sign In</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                </div>
                <span>or use your account</span>
                <input className="auth" type="email" {...username} placeholder="Email address" />
                <input className="auth" type="password" {...password} placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button className="action" onClick={handleLogin}>Sign In</button>
            </form>
        </div>
    )
} 

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChange = e=>{
        setValue(e.target.value);
    }
    return{
        value,
        onChange: handleChange
    }
}
export default SignInComponent;