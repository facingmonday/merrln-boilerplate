import React, { Component } from 'react';
import LoginForm from '../../containers/user/Login';
import Header from '../../components/Header';

class Login extends Component {
    render() {
        return (
            <div>
                <LoginForm />
            </div>
        );
    }
}

export default Login;