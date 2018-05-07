import React, { Component, PropTypes} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import Loading from '../Loading';

import renderField from '../form/renderField';


function validate(values) {
    const errors = {};
  
    if (!values.email || values.email.trim() === '') {
      errors.email = 'Enter an email address';
    }

    if(values.password != values.confirmPassword){
        errors.confirmPassword = "Passwords must match";
    }
    return errors;
}


class SignUp extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    onSubmit(values){
        const _this = this;
        this.props.register(values);
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
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="email"
                        label="Email"
                        type="text"
                        component={renderField} />
                    <Field
                        name="password"
                        type="password"
                        label="Password"
                        component={renderField} />
                    <Field
                        name="confirmPassword"
                        type="password"
                        label="Confirm"
                        component={renderField} />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={submitting} >
                        submit
                    </button>
                </form>
                <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>
            </div>
        );
    }
}

export default reduxForm({
    form: 'RegistrationForm',
    validate
})(SignUp);