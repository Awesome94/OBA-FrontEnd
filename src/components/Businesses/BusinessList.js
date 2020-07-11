import React,{useEffect, useState} from 'react';
import{Link} from 'react-dom';
import {useDispatch, connect, useSelector} from 'react-redux';
import {userActions} from '../../_actions';
import { Table, Form } from 'react-bootstrap';
import moduleName from './business.css'

const BusinessTable = ({items}) => {
  const businesses = useSelector(state => state.business)
  const user = useSelector(state => state.authentication.user)
  const [files, setfiles] = useState([''])
  const [Uploading, setUploading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.getAllBusinesses());
    }, []);

  const fileInputRef = React.createRef()

  const openFileDialog = () => {
    fileInputRef.current.click()
}

const onFilesAdded=evt=> {
  const files = evt.target.files[0];
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    const formData = new FormData();
    console.log("this is it formdata", formData.entries(), files)
    formData.append("file", files, files.name);

    dispatch(userActions.UploadCsvFile(formData))
    // req.open("POST", `http://localhost:5000/business/1/upload`);
    // req.send(formData);
    
    // setfiles(formData)

  });
  // const formData = new FormData();
}

const fileListToArray=(list)=>{
  const array = []
  for (var i = 0; i < list.length; i++) {
      array.push(list.item(i))
  }
  return array
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

                <td> 
                  <button className="uploadBtn" onClick={openFileDialog}><i  className="material-icons md-24">publish</i></button>
                    <input
                    ref={fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    title=""
                    onChange={onFilesAdded}
                />
                   
                </td>
                <td>
                  <button className="uploadBtn" ><i className="material-icons md-24">edit</i></button>
                </td>
                <td>
                <button className="uploadBtn" ><i className="material-icons md-24 red">delete</i></button>
                </td>
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