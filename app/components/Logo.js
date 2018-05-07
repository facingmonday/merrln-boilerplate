import React, { Component } from 'react';
import logo from 'DIR_ASSETS/images/Merrln-Logo@2x.png';
class Logo extends Component {
    render() {
        return (
            <div className="logo-container text-center">
                <div className="Company-logo-img">
                    <img width="50" src={logo} />
                </div>
            </div>
        );
    }
}

export default Logo;