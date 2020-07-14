import React from 'react';
import BusinessList from '../Businesses/BusinessList'
import {Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

import './action.css'

const ActionPage = () => {
    const onClickButton = ()=>{
        const apiUrl = 'http://localhost:5000/';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log('This is your data', data));
  }


    return ( 
        <div className="actionPageContainer">
            <div className="regButton">
                <Link to="/register">
                     <Button color="bg-primary" size="lg" active> Register Business</Button>
                     </Link>
            </div>
            <div>
                <BusinessList/>
            </div>
        </div>
     );
}


export default ActionPage;