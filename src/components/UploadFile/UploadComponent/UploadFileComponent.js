import React, { useState } from 'react';
import './UploadFile.css';
import DropzoneComponent from '../Dropzone/Dropzone';

const UploadFile = (props) => {
    const [Uploading, setUploading] = useState(false)
    const [UploadProgress, setUploadProgress] = useState({})
    const [SuccessfullUploaded, setSuccessfullUploaded] = useState(false)

    return (
        <div className="Upload">
            <span className="Title">Upload Files</span>
            <div className="Content">
                <div>
                    <Dropzone
                        onFilesAdded={}
                        disabled={}
                    />
                </div>
                <div className="Files">
                    {files.map(file => {
                        return (
                            <div key={file.name} className="Row">
                                <span className="Filename">{file.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="Actions" />
        </div>
    );
}

export default UploadFile;