import React, { Component, PropTypes } from 'react';


const renderBoolean = ({ input, label, type, meta: { touched, error, invalid, warning } }) => {
    
    return (
        <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
            <div className="form-check">
                <input  {...input} className=" form-check-input"  placeholder={label} type={type} />
                <label  className="control-label">{label}</label>
            </div>
            <div className="help-block">
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
}

export default renderBoolean;