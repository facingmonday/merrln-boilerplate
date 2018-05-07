import React, { Component } from 'react';
import SignUpForm from '../../containers/user/SignUp';
import Header from '../../components/Header';

class SignUpPage extends Component {
    render() {
        return (
            <div>
                <SignUpForm />
            </div>
        );
    }
}

export default SignUpPage;