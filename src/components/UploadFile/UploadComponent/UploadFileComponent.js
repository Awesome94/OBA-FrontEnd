import React, { useState } from 'react';
import './uploadfile.css';
import DropzoneComponent from '../Dropzone/Dropzone';
import Progress from '../Progress/Progress';

const UploadFileComponent = (props) => {
    const [files, setfiles] = useState([''])
    const [Uploading, setUploading] = useState(false)
    const [UploadProgress, setUploadProgress] = useState({})
    const [SuccessfullUploaded, setSuccessfullUploaded] = useState(false)

    const renderProgress=file=>{
        const uploadProgress = setUploadProgress[file.name];
        if (Uploading || SuccessfullUploaded) {
          return (
            <div className="ProgressWrapper">
              <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
              <img
                className="CheckIcon"
                alt="done"
                src="baseline-check_circle_outline-24px.svg"
                style={{
                  opacity:
                    uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
                }}
              />
            </div>
          );
        }
      }
      const onFilesAdded = filesAdded=>{
          console.log(files)
          const result = files.filter(file => file.name !== filesAdded[0].name);
          setfiles(result.concat(filesAdded))
          console.log(files)
      }
      const renderActions=()=>{
        if (SuccessfullUploaded) {
          return (
            <button
              onClick={() =>
                this.setState({ files: [], successfullUploaded: false })
              }
            >
              Clear
            </button>
          );
        } else {
          return (
            <button className="upload"
              disabled={files.length > 0 || Uploading}
              onClick
            >
              Upload
            </button>
          );
        }
      }

    return (
        <div className="Upload-container">
        <div className="Card">
        <div className="Upload">
            <span className="Title">Upload Files</span>
            <div className="Content">
                <div>
                    <DropzoneComponent
                        filesAdded={alert("this is awesome")}
                        disabled={Uploading || SuccessfullUploaded}
                    />
                </div>
                <div className="Files">
                    {files.map(file => {
                        return (
                            <div key={file.name} className="Row">
                                <span className="Filename">{file.name}</span>
                                {renderProgress(file)}
                            </div>
                        );
                    })}
                </div>
            </div>
                <div className="Actions">{renderActions()}</div>
        </div>
        </div>
        </div>
    );
}

export default UploadFileComponent;