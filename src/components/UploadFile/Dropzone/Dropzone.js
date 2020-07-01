import React, {useState} from 'react';
import './Dropzone.css';
import './cloud.png'
const DropzoneComponent = (props) => {
    const [highlight, sethighlight] = useState(true)

    const fileInputRef = React.createRef()

    const openFileDialog = () => {
        if (props.disabled) return;
        fileInputRef.current.click()
    }

    const onFilesAdded=evt => {
        if (props.disabled) return;
        const files = evt.target.files;
        if (props.onFilesAdded) {
            const array = fileListToArray(files);
            props.onFilesAdded(array);
        }
    }

    const onDragOver=evt=>{
        evt.preventDefault()

        if (props.disabled) return

        sethighlight({ hightlight: true })
    }

    const onDragLeave=()=>{
        sethighlight({ hightlight: false })
    }

    const onDrop=(event)=>{
        event.preventDefault()

        if (props.disabled) return

        const files = event.dataTransfer.files
        if (props.onFilesAdded) {
            const array = fileListToArray(files)
            props.onFilesAdded(array)
        }
        sethighlight({ hightlight: false })
    }

    const fileListToArray=(list)=>{
        const array = []
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i))
        }
        return array
    }

    return (
        <div
            className={`Dropzone ${highlight ? 'Highlight' : ''}`}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={openFileDialog}
            style={{ cursor: props.disabled ? 'default' : 'pointer' }}
        >
            <input
                ref={fileInputRef}
                className="FileInput"
                type="file"
                multiple
                onChange={onFilesAdded}
            />
            <img
                alt="upload"
                className="Icon"
                src={require("./cloud.png")}
            />
            <span>Upload Files</span>
        </div>
    );
}

export default DropzoneComponent;