import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    componentWillMount(){
        this.props.logout();
    }
    render() {
        const {user} = this.props;
        console.log('Logout', user);
        if(user.authenticated){
            return (
                <p>Logging you out</p>
            )
        } else {
            return (
                <Redirect to="/login" />
            );
        }
        
    }
}

export default Logout;