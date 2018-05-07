import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/user';
import { withRouter } from 'react-router-dom';
import { SubmissionError } from 'redux-form';

import Account from '../../components/user/Account';

const mapStateToProps = (state)=> {
    return {
        user: state.user.loggedInUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));