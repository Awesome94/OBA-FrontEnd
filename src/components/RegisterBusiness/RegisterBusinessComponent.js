import React from 'react';
import './RegisterBusinessComponent.css'

const RegisterBusinessComponent = () => {
    return (
        <div className="reg-container">
        <div className="reg-business-container">
            <form className="business">
                <input className="inputField" title="Business Name" placeholder="Business Name" />
                <input className="inputField" placeholder="Company Address" />
                <div className="form-section">
                <input className="inputField" placeholder="Countries of Operation" />
                <input className="inputField" placeholder="Annual Sales Revenue" />
                </div>
                <input className="inputField" placeholder="Accounting Software" />
                <input className="inputField" placeholder="Business Abbreviation" />
                <input className="inputField" placeholder="Country" />
                <input className="inputField" placeholder="Entity" />
            </form>
        </div>
            <button className="register">Submit</button>
        </div>
    );
}

export default RegisterBusinessComponent;