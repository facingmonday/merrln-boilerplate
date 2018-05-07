import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/user';
import { withRouter } from 'react-router-dom';
import SignUp from '../../components/user/SignUp';
import { SubmissionError } from 'redux-form';

const mapStateToProps = (state)=> {
    return {
        user: state.user.loggedInUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (data)=>{
            return dispatch(Actions.registerUser(data))
                .then(result => {
                    console.log('register response', result);
                    if(result.error){
                        dispatch(Actions.registerUserFailure(result.error));
                        throw new SubmissionError(result.error);
                    }
                    //let other components know that everything is fine by updating the redux` state
                    dispatch(Actions.registerUserSuccess(result.payload.data)); //ps: this is same as dispatching RESET_USER_FIELDS
                    return Promise.resolve();
                });
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));