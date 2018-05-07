import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import Loading from '../Loading';

import renderField from '../form/renderField';


function validate(values) {
    const errors = {};
  
    if (!values.name || values.name.trim() === '') {
      errors.name = 'Enter an name.';
    }
  
    return errors;
}


class Login extends Component {
    onSubmit(values){
        this.props.login(values);
    }
    
    renderError(user){
        if(user && user.error && user.error.message){
            return (
                <div className="alert alert-danger">
                    { user.error.message? user.error.message: "Something went wrong"}
                </div>
            );
        } else {
            return <span></span>
        }
    }

    render() {
        const { handleSubmit, submitting, user } = this.props;
        if(this.props.user.authenticated){
            return (<Redirect to="/" />);
        }
        return (
            <div>
                {this.renderError(user)}
                <form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="email"
                        type="text"
                        component="input" />
                    <Field
                        name="password"
                        type="password"
                        component="input" />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={submitting} >
                        submit
                    </button>
                </form>
                <Link to="/signup">Sign up</Link>
            </div>
        );
    }
}

export default reduxForm({
    form: 'LoginForm',
    validate
})(Login);