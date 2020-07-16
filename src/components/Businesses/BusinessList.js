import React, { useEffect, useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { Table, Modal, Button } from 'react-bootstrap';
import { userActions } from '../../_actions';
import './business.css';

const BusinessTable = ({ items }) => {
  const user = useSelector((state) => state.authentication.user);
  const [files, setfiles] = useState(['']);
  const [Uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [businessId, setBusinessId] = useState();
  const [bussinessList, setBussinessList] = useState({ items });
  const businesses = useSelector((state) => state.business.items);

  useEffect(() => {
    dispatch(userActions.getAllBusinesses());
  }, []);

  const fileInputRef = React.createRef();

  const openFileDialog = (id) => {
    fileInputRef.current.click();
  };

  const onFilesAdded = (evt) => {
    const files = evt.target.files[0];
    const id = parseInt(evt.target.title);
    dispatch(userActions.UploadCsvFile(files, id));
  };

  const updateBusinessData = (data) => {
    dispatch(userActions.setEditBusiness(data));
  };

  const handleDelete = (id) => {
    dispatch(userActions.delete(id));
    setBussinessList(items);
    setModalShow(false);
  };

  const setModalAndID = (id) => {
    setModalShow(true);
    setBusinessId(id);
  };

  const DeleteBusinessModal = (props) => (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete businessName and all it's Data?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Delete Chanuka and all it's Transaction details
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button variant="danger" onClick={() => { handleDelete(businessId); }}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
  return (
    <div>
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
          items && items.map((business) => (
            <tr>
              <td style={{ cursor: 'pointer' }} onClick={() => { alert('awesome'); }}>{business.name}</td>
              <td>{business.abbreviation}</td>
              <td>{business.company_address}</td>
              <td>{business.country}</td>
              <td>{business.name}</td>

              <td>
                <i style={{ cursor: 'pointer' }} onClick={openFileDialog} className="material-icons md-24 blue">publish</i>
                <input
                  ref={fileInputRef}
                  className="FileInput"
                  type="file"
                  multiple
                  title={business.id}
                  onChange={onFilesAdded}
                />

              </td>
              <td>
                <i style={{ cursor: 'pointer' }} onClick={() => { updateBusinessData(business); }} className="material-icons md-24 green">edit</i>
              </td>
              <td>
                <i style={{ cursor: 'pointer' }} onClick={() => setModalAndID(business.id)} className="material-icons md-24 red">delete</i>
              </td>
            </tr>
          ))
          }
        </tbody>
      </Table>
      <DeleteBusinessModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

const mapStateToProps = ({ business }) => ({ items: business.items });
export default connect(mapStateToProps, {})(BusinessTable);
