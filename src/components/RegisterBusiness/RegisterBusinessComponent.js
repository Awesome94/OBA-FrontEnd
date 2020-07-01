import React from 'react';
import './RegisterBusinessComponent.css'

const RegisterBusinessComponent = () => {
    return (
        <div className="reg-container">
            <div className="reg-business-container">
                <form className="business">
                    <div className="form-section">
                        <input className="inputField" title="Business Name" placeholder="Business Name" />
                        <input className="small" placeholder="Business Abbreviation" />
                    </div>
                    <div className="form-section">
                        <input className="inputField" placeholder="Company Address" />
                        <input className="small" placeholder="Country" />
                    </div>
                    <div className="form-section">
                        <input className="long" placeholder="Countries of Operation" />
                    </div>
                    <div className="form-section">
                        <input className="inputField" placeholder="Annual Sales Revenue" />
                        <input className="small" placeholder="Entity" />
                    </div>
                    <div className="form-section">
                        <input className="long" placeholder="Accounting Software" />
                    </div>
                </form>
            </div>
            <div>
                <button className="register">Submit</button>
            </div>
        </div>
    );
}

export default RegisterBusinessComponent;