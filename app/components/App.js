import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import * as Actions from '../actions/user';
import Loading from './Loading';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/user/Login';
import Logout from '../containers/user/Logout';
import SignUpPage from '../pages/user/SignUp';
import AccountPage from '../pages/user/Account';
import { getCookie } from '../utils/cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('rest', rest);
    return (
    <Route {...rest} render={(props) => {
        console.log('Private Route props', props);
        return ((false)
                ? <Component {...props} />
                : <Redirect to='/login' />
            )
    }} />
)}

class App extends Component {
    componentDidMount() {
        const cookie = getCookie('token');
        this.props.fetchMe();
    }
    
    authorizedRoute(Component){
        if(this.props.user.authenticated){
            return (Component);
        } else {
            return ()=>{return <Redirect to="/login" />};
        }
    }

    render() {
        const { user } = this.props;

        if(user.loading){
            return (<Loading />)
        } else {
            return (
                <HashRouter>
                    <div className="app-container">
                        <Switch>
                            <Route exact path='/' render={this.authorizedRoute(Dashboard)} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/logout" component={Logout} />
                            <Route exact path="/signup" component={SignUpPage} />
                            <Route exact path="/account" component={AccountPage} />
                        </Switch>
                    </div>
                </HashRouter>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    user: state.user.loggedInUser
})

const mapDispatchToProps = (dispatch)=>{
    return { 
        fetchMe: ()=>{
            return dispatch(Actions.fetchMe()).then((response)=>{
                console.log('response', response);
                if(response && response.payload && response.payload.status == "200"){
                    return dispatch(Actions.fetchMeSuccess(response.payload.data)).then(()=>{
                        return Promise.resolve(null);
                    })
                } else {
                    return dispatch(Actions.fetchMeFailure(response.error))
                }
            })
        }
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)