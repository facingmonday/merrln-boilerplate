import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/user';
import { withRouter } from 'react-router-dom';
import Logout from '../../components/user/Logout';

const mapStateToProps = (state)=> {
    return {
        user: state.user.loggedInUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: ()=>{
            return dispatch(Actions.resetLoggedInUser())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));