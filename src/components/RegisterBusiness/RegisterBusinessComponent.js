import React, {useState} from 'react';
import './RegisterBusinessComponent.css'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {userActions} from '../../_actions/user.actions';

const RegisterBusinessComponent = () => {
    const name=useFormInput('');
    const abbreviation=useFormInput('');
    const company_address=useFormInput('');
    const country=useFormInput('');
    const countries_of_operation=useFormInput('');
    const annual_sales_revenue=useFormInput('');
    const software=useFormInput('');
    const entity=useFormInput('');

    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registering);
    const dispatch = useDispatch();

    function handleRegisterBusiness(e){ 
        e.preventDefault();
        setSubmitted(true);
        if (name && abbreviation 
            && company_address && country
            && countries_of_operation && annual_sales_revenue && software){
                const payload = {
                    name:name.value,
                    abbreviation:abbreviation.value,
                    company_address:company_address.value,
                    country:country.value,
                    countries_of_operation:countries_of_operation.value,
                    annual_sales_revenue:annual_sales_revenue.value,
                    software:software.value,
                    entity:entity.value
                }
                dispatch(userActions.registerBusiness(payload));
            }
     }

    return (
        <div className="reg-container">
            <div className="reg-business-container">
                <Link to="/" className="backLink">Back</Link>
                <form className="business" onSubmit={handleRegisterBusiness}>
                    <div>
                    </div>
                    <div className="form-section">
                        <input {...name} className="inputField" title="Business Name" placeholder="Business Name" />
                        <input {...abbreviation} className="small" placeholder="Business Abbreviation" />
                    </div>
                    <div className="form-section">
                        <input {...company_address} className="inputField" placeholder="Company Address" />
                        <input {...country} className="small" placeholder="Country" />
                    </div>
                    <div className="form-section">
                        <input {...countries_of_operation} className="long" placeholder="Countries of Operation" />
                    </div>
                    <div className="form-section">
                        <input {...annual_sales_revenue} className="inputField" placeholder="Annual Sales Revenue" />
                        <input {...entity} className="small" placeholder="Entity" />
                    </div>
                    <div className="form-section">
                        <input {...software} className="long" placeholder="Accounting Software" />
                    </div>
                <button className="action">Submit</button>
                </form>
            </div>
            <div>
            </div>
        </div>
    );
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

export default RegisterBusinessComponent;