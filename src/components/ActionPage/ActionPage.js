import React from 'react';
import BusinessList from '../Businesses/BusinessList'
import {Button} from 'react-bootstrap';
import './action.css'

const ActionPage = () => {
    return ( 
        <div className="actionPageContainer">
            <div className="regButton">
                <Button variant="primary" size="lg" active> Register Business</Button>
            </div>
            <div>
                <BusinessList/>
            </div>
        </div>
     );
}


export default ActionPage;