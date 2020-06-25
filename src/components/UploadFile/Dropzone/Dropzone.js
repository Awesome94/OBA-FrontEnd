import './Dropzone.css'
const DropzoneComponent = () => {

    fileInputRef = React.createRef()

    const openFileDialog = () => {
        if (props.disabled) return;
        fileInputRef.current.click()
    }

    onFilesAdded(evt) => {
        if (props.disabled) return;
        const files = evt.target.files;
        if (props.onFilesAdded) {
            const array = FileListToArray(files);
            props.onFilesAdded(array);
        }
    }

    onDragOver(evt) {
        evt.preventDefault()

        if (props.disabled) return

        setState({ hightlight: true })
    }

    onDragLeave() {
        setState({ hightlight: false })
    }

    onDrop(event) {
        event.preventDefault()

        if (props.disabled) return

        const files = event.dataTransfer.files
        if (props.onFilesAdded) {
            const array = fileListToArray(files)
            props.onFilesAdded(array)
        }
        setState({ hightlight: false })
    }

    fileListToArray(list) {
        const array = []
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i))
        }
        return array
    }

    return (
        <div
            className={`Dropzone ${state.hightlight ? 'Highlight' : ''}`}
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
                src="baseline-cloud_upload-24px.svg"
            />
            <span>Upload Files</span>
        </div>
    );
}

export default DropzoneComponent;