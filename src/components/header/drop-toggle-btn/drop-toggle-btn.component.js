import React from 'react';
import PropTypes from 'prop-types';
import './drop-toggle-btn.style.css';

const DropToggleBtn = (props)=>(
    <button 
    onClick={props.handleToggle}
    className={"drop-toggle-btn " + (props.open ? "open" : "")}>
        <div className="btn-bar"></div>
        <div className="btn-bar hide-me"></div>
        <div className="btn-bar"></div>
    </button>
)


DropToggleBtn.propTypes = {
    open: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
}

export default DropToggleBtn;