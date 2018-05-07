import React, { Component, PropTypes } from 'react';


const renderAutocomplete = ({ input, label, type, meta: { touched, error, invalid, warning } }) => {
  console.log('arguments', input);
  return (
  <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
    <label  className="control-label">{label}</label>
    <div>
      <input {...input} className="form-control"  placeholder={label} type={type}/>
       <div className="help-block">
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  </div>
);}

export default renderAutocomplete;