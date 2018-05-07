import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class RenderSelect extends Component {
    constructor(props){
        super(props);
        this.renderOption.bind(this);
    }
    renderOption(option, id){
        return (
            <option key={id} value={id}>{option}</option>
        )
    }
    render() {  
        const { input, label, type, options, organizations, meta: { touched, error, invalid, warning } } = this.props;
        console.log('RenderSelect this.props', this.props);
        return (
            <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
                <div>
                    <label  className="control-label">{label}</label>
                    <select {...input} className="form-control"  placeholder={label} type={type}>
                        {(options)? _.map(options, this.renderOption): <option></option>}
                    </select>
                </div>
                 <div className="help-block">
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        );
    }
}

export default RenderSelect;