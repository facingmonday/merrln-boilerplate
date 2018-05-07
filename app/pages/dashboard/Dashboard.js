import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import './Dashboard.less';
import DashboardContainer from '../../containers/Dashboard';

function mapStateToProps(state) {
    return {

    };
}

class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-2">
                        <Navigation />
                    </div>
                    <div className="col-xs-12 col-sm-10">
                        <div className="row">
                            <Header />
                        </div>
                        <div className="row">
                            <DashboardContainer />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default withRouter(connect(
    mapStateToProps,
)(Dashboard));