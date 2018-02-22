import React from 'react';
import PropTypes from 'prop-types';
import './success-info.style.css';
const SuccessInfo = ({ data })=>{
    const saveVals = Object.keys(data);
    
    return (
        <div 
        style={{

        }}
        className="saved-info-wrapper"
        >
            <span className="title"> <i className="fa fa-check"/> Success! </span>
            <div 
            className="value-list">
                <ul>
                    { // Prints out saved keys and values 
                        saveVals.map(
                            saveKey=>(
                                <li
                                key={saveKey}
                                >
                                    <b>{saveKey}</b> : {data[saveKey]}
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    )
}


SuccessInfo.propTypes = {
    data: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        zipCode: PropTypes.string.isRequired,
    })
}

export default SuccessInfo;