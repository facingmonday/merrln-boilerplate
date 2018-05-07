import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/user/Login';
import SignUpPage from '../pages/user/SignUp';
import Account from '../pages/user/Account';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        console.log('Private Route props', props);
      return ((false)
            ? <Component {...props} />
            : <Redirect to='/login' />
        )
    }} />
)
const TopLevelRoutes = () => (
    <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUpPage} />
        <Privateroute exact path="/account" component={Account} />
    </Switch>
);

export default connect()(TopLevelRoutes);