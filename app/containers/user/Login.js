import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/user';
import { withRouter } from 'react-router-dom';
import Login from '../../components/user/Login';
import { SubmissionError } from 'redux-form';

const mapStateToProps = (state)=> {
    return {
        user: state.user.loggedInUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data)=>{
            return dispatch(Actions.loginUser(data))
                .then(result => {
                    console.log('loginUser result', result);
                    if(result.error){
                        dispatch(Actions.loginUserFailure(result.error));
                        throw new SubmissionError(result.payload.response.data);
                    } else if(result.payload.response && result.payload.response.status !== 200) {
                        dispatch(Actions.loginUserFailure(result.payload.response.data));
                        throw new SubmissionError(result.payload.response.data);
                    }
                    //let other components know that everything is fine by updating the redux` state
                    dispatch(Actions.loginUserSuccess(result.payload.data)); //ps: this is same as dispatching RESET_USER_FIELDS
                    return Promise.resolve();
                });
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));