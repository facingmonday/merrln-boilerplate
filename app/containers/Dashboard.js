import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/dashboard';
import { withRouter } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

const mapStateToProps = (state)=> {
    return {
        dashboard: state.dashboard
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDashboard: function(){
            return dispatch(Actions.fetchDashboard())
                .then((response)=>{
                    if(response && response.payload && response.payload.status == "200"){
                        return dispatch(Actions.fetchDashboardSuccess(response.payload.data));
                    } else {
                        return dispatch(Actions.fetchDashboardFailure(response.error));
                    }
                })
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));