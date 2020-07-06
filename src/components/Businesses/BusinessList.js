import React from 'react';
import { Table } from 'react-bootstrap';


const BusinessTable = () => {

  const fileInputRef = React.createRef()

  const openFileDialog = () => {
    fileInputRef.current.click()
}
    return ( 
        <Table responsive>
        <thead>
          <tr>
            <th>Business Name</th>
            <th>Abbreviation</th>
            <th>Address</th>
            <th>Country</th>
            <th>Files Attached</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chanuka</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
              <div onClick={openFileDialog}>
              <input
                ref={fileInputRef}
                className="FileInput"
                type="file"
                multiple
                />
                <button>Upload Csv</button></div>
            </td>
          </tr>
     

        </tbody>
      </Table>
     );
}
 
export default BusinessTable;