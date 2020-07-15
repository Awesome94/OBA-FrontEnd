import React, { useState } from 'react';
import './RegisterBusinessComponent.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, connect } from 'react-redux';
import { userActions } from '../../_actions/user.actions';

const RegisterBusinessComponent = (props) => {
  const [name, setName] = useState(props.items ? props.items.name : '');
  const [abbreviation, setAbbreviation] = useState(props.items ? props.items.abbreviation : '');
  const [address, setAddress] = useState(props.items ? props.items.company_address : '');
  const [country, setCountry] = useState(props.items ? props.items.country : '');
  const [operations, setOperations] = useState(props.items ? props.items.countries_of_operation : '');
  const [software, setsoftware] = useState(props.items ? props.items.accounting_software : '');
  const [revenue, setRevenue] = useState(props.items ? props.items.annual_sales_revenue : '');
  const [entity, setEntity] = useState(props.items ? props.items.name : '');

  const [submitted, setSubmitted] = useState(false);
  const registering = useSelector((state) => state.registering);
  const dispatch = useDispatch();

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onAbbChange = (event) => {
    setAbbreviation(event.target.value);
  };
  const onCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const onAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const onEntityChange = (event) => {
    setEntity(event.target.value);
  };
  const onRevenueChange = (event) => {
    setRevenue(event.target.value);
  };
  const onSoftwareChange = (event) => {
    setsoftware(event.target.value);
  };
  const onOpsChange = (event) => {
    setOperations(event.target.value);
  };

  function handleRegisterBusiness(e) {
    e.preventDefault();
    setSubmitted(true);
    if (name && abbreviation
            && address && country
            && operations && revenue && software) {
      const payload = {
        name,
        abbreviation,
        company_address: address,
        country,
        countries_of_operation: operations,
        annual_sales_revenue: revenue,
        software,
        entity,
      };
      dispatch(userActions.registerBusiness(payload));
    }
  }

  return (
    <div className="reg-container">
      <div className="reg-business-container">
        <Link to="/" className="backLink">Back</Link>
        <form className="business" onSubmit={handleRegisterBusiness}>
          <div />
          <div className="form-section">
            <input onChange={onNameChange} className="inputField" title="Business Name" placeholder="Business Name" value={name} required />
            <input onChange={onAbbChange} className="small" placeholder="Business Abbreviation" value={abbreviation} required />
          </div>
          <div className="form-section">
            <input onChange={onAddressChange} className="inputField" placeholder="Company Address" value={address} required />
            <input onChange={onCountryChange} className="small" placeholder="Country" value={country} required />
          </div>
          <div className="form-section">
            <input onChange={onOpsChange} className="long" placeholder="Countries of Operation" value={operations} required />
          </div>
          <div className="form-section">
            <input onChange={onRevenueChange} className="inputField" placeholder="Annual Sales Revenue" value={revenue} required />
            <input onChange={onEntityChange} className="small" placeholder="Entity" value={entity} required />
          </div>
          <div className="form-section">
            <input onChange={onSoftwareChange} className="long" placeholder="Accounting Software" value={software} required />
          </div>
          <button type="button" className="action">Submit</button>
        </form>
      </div>
      <div />
    </div>
  );
};

const mapStateToProps = ({ business }) => ({ items: business.businessData });
export default connect(mapStateToProps, {})(RegisterBusinessComponent);
