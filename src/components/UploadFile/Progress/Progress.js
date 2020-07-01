import React from 'react';
import './progressbar.css'

const Progress = () => {
    return ( 
        <div className="progressBar">
            <div
            className="progress"
            style={{ width: this.props.progress + '%'}}
            />
        </div>
     );
}
 
export default Progress;