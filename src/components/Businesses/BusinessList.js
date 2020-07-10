import React,{useEffect} from 'react';
import{Link} from 'react-dom';
import {useDispatch, connect, useSelector} from 'react-redux';
import {userActions} from '../../_actions';
import { Table } from 'react-bootstrap';


const BusinessTable = ({items}) => {
  const businesses = useSelector(state => state.business)
  const user = useSelector(state => state.authentication.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.getAllBusinesses());
    }, []);

  const fileInputRef = React.createRef()

  const openFileDialog = () => {
    fileInputRef.current.click()
}

console.log("items made", items)
    return ( 
        <Table responsive>
        <thead>
          <tr>
            <th>Business Name</th>
            <th>Abbreviation</th>
            <th>Address</th>
            <th>Country</th>
            <th>Files Attached</th>
            <th>Upload .Csv</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {          
          items && items.map((business)=>{
            return (
              <tr>
                <td>{business.name}</td>
                <td>{business.abbreviation}</td>
                <td>{business.address}</td>
                <td>{business.country}</td>
                <td>{business.name}</td>
                <td>{business.name}</td>
                <td>{business.name}</td>
            </tr>
              )
          })
          }
        </tbody>
      </Table>
     );
}
const mapStateToProps = ({business})=>({items: business.items})
export default connect(mapStateToProps, {})(BusinessTable);