import React from 'react';
import RegisterBusiness from '../RegisterBusiness/RegisterBusinessComponent';

export default function UpdateBusiness() {
    return (
        <div>
            <RegisterBusiness
            name="Awesome"
            address="Bugolobi"
            abbreviation="Aws"
            country="Uganda"
            countries_of_operation="Uganda, Kenya"
            annual_sales_revenue="213113"
            entity="software"
            software="Tally"
            />
        </div>
    )
}
