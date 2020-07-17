import React, { useState } from 'react';
import './RegisterBusinessComponent.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, connect } from 'react-redux';
import Select from 'react-select';
import countryList from 'react-select-country-list';
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
  const options = countryList().getData();

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
  const onRevenueChange = (e) => {
    setRevenue(e.label);
  };
  const onSoftwareChange = (event) => {
    setsoftware(event.target.value);
  };
  const onOpsChange = (event) => {
    setOperations(event.target.value);
  };

  const rangeOptions = [
    { value: 0, label: '50,000-100,000' },
    { value: 0, label: '100,000-200,0000' },
    { value: 0, label: '200,000-300,000' },
    { value: 0, label: '300,000-450,000' },
    { value: 0, label: 'Over 450,000' },
  ];
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 10,
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'red' : 'green',
      width: '100%',
      align: 'left',
    }),
    input: (provided, state) => ({
      ...provided,
      padding: 8,

    }),
    container: (provided, state) => ({
      ...provided,
      width: '100%',

    }),
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      borderRadius: '10px',
      margin: '4px',
      marginLeft: -0.1,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  const customStylesRange = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: '1px dotted pink',
      padding: 10,
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'black' : 'green',
      width: '100%',
      align: 'left',
      background: '#FFFF',

    }),
    input: (provided, state) => ({
      ...provided,
      padding: 15,

    }),
    container: (provided, state) => ({
      ...provided,
      width: '100%',
    }),
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      borderRadius: '10px',
      margin: '10px',
      marginLeft: 5,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };
  const formatCountries = (countries) => countries && countries.map((OpsCountry) => OpsCountry.label);

  function handleRegisterBusiness(e) {
    e.preventDefault();
    setSubmitted(true);
    const countriesOfOperation = formatCountries(operations);

    const payload = {
      name,
      abbreviation,
      company_address: address,
      country,
      countries_of_operation: countriesOfOperation,
      annual_sales_revenue: revenue,
      software,
      entity,
    };
    if (props.items && (props.items.name === '' || props.items.address === '')) {
      return dispatch(userActions.registerBusiness(payload));
    }
    if (props.items && props.items.id) {
      return dispatch(userActions.updateBusinessDetails(payload, props.items.id));
    }
  }

  const countriesHandler = (e) => {
    setOperations(e);
  };

  return (
    <div className="reg-container">
      <div className="reg-business-container">
        <Link to="/" className="backLink">Back</Link>
        <form className="business" onSubmit={(e) => handleRegisterBusiness(e)}>
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
            <Select
              placeholder="Countries Of Operation"
              closeMenuOnSelect={false}
              isMulti
              options={options}
              styles={customStyles}
              onChange={(e) => {
                countriesHandler(e);
              }}
            />
          </div>
          <div className="form-section">
            <Select
              placeholder="Annual Sales Revenue KSHS"
              closeMenuOnSelect={false}
              options={rangeOptions}
              onChange={(e) => { onRevenueChange(e); }}
              styles={customStylesRange}
            />
            <input onChange={onEntityChange} className="entity" placeholder="Entity" value={entity} required />
          </div>
          <div className="form-section">
            <input onChange={onSoftwareChange} className="long" placeholder="Accounting Software" value={software} required />
          </div>
          <button type="submit" className="action">Submit</button>
        </form>
      </div>
      <div />
    </div>
  );
};

const mapStateToProps = ({ business }) => ({ items: business.businessData });
export default connect(mapStateToProps, {})(RegisterBusinessComponent);
