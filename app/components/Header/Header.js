import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import './Header.less';

function mapStateToProps(state) {
    return state;
}

class Header extends Component {
    render() {
        return (
            <div className="Header-container">
                <span className="Header-title">{this.props.name}</span>
            </div>
        );
    }
}

export default withRouter(connect(
    mapStateToProps
)(Header));