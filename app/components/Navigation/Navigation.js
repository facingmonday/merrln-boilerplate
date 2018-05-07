import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './Navigation.less';

function mapStateToProps(state) {
    return {
        
    };
}

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation-container">
                <div className="Navigation-logo">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <ul className="Navigation-list-group">
                    <Link to="/">
                        <li className="Navigation-list-group-item">
                            <i className="fa fa-dashboard"></i>
                            Dashboard
                        </li>    
                    </Link>
                    <Link to="/account">
                        <li className="Navigation-list-group-item">
                            <i className="fa fa-gears"></i>
                            Account
                        </li>    
                    </Link>
                    <Link to="/logout">
                        <li className="Navigation-list-group-item">
                            <i className="fa fa-user"></i>
                            Logout
                        </li>    
                    </Link>
                </ul>
            </div>
            
        );
    }
}

export default connect(
    mapStateToProps,
)(Navigation);