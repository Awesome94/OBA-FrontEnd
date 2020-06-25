import React from 'react';
import './progress.css'

const ProgressComponent = () => {
    return ( 
        <div className="progressBar">
            <div
            className="progress"
            style={{ width: this.props.progress + '%'}}
            />
        </div>
     );
}
 
export default ProgressComponent;