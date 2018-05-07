import axios from 'axios';
import * as ActionTypes from '../actionTypes/user';
import { getCookie, setCookie, deleteCookie } from '../utils/cookie';
import Promise from 'bluebird';

export function fetchUsersLoading(){
  return {
    type: ActionTypes.FETCH_USERS_LOADING
  }
}

export function fetchUsersSuccess(users){
  return {
    type: ActionTypes.FETCH_USERS_SUCCESS,
    payload: users
  }
}

export function fetchUsersFailure(error){
  return {
    type: ActionTypes.FETCH_USERS_SUCCESS,
    payload: error
  }
}

export function fetchUsers() {
  const request = axios({
    method: 'get',
    url: `/api/users`,
    headers: []
  });
  return {
    type: ActionTypes.FETCH_USERS,
    payload: request
  };
}


export function fetchUserLoading(){
  return {
    type: ActionTypes.FETCH_USER_LOADING
  }
}

export function fetchUserSuccess(activeUser){
  return {
    type: ActionTypes.FETCH_USER_SUCCESS,
    payload: activeUser
  }
}

export function fetchUserFailure(error){
  return {
    type: ActionTypes.FETCH_USER_SUCCESS,
    payload: error
  }
}

export function fetchUser(id) {
  const request = axios({
    method: 'get',
    url: `/api/users/id`,
    headers: []
  });
  return {
    type: ActionTypes.FETCH_USER,
    payload: request
  };
}

export function fetchMe() {
  const request = axios({
    method: 'get',
    url: `/api/users/me`,
    headers:  { authorization: "Bearer " + getCookie('token') }
  });
  return {
    type: ActionTypes.FETCH_ME,
    payload: request
  };
}
export function fetchMeSuccess(me) {
  console.log('me', me);
  return {
    type: ActionTypes.FETCH_ME_SUCCESS,
    payload: Promise.resolve(me)
  };
}
export function fetchMeFailure(error) {
  console.log('fetchMeFailure');
  return {
    type: ActionTypes.FETCH_ME_FAILURE,
    payload: error
  };
}


export function registerUser(props) {
  const request = axios({
    method: 'post',
    url: `/api/users/register`,
    data: props
  });
  return {
    type: ActionTypes.REGISTER_USER,
    payload: request
  };
}

export function registerUserSuccess(user) {
  console.log('user', user);
  if(user.token){
    setCookie('token', user.token);
  }
  return {
    type: ActionTypes.REGISTER_USER_SUCCESS,
    payload: user
  };
}

export function registerUserFailure(error) {
  return {
    type: ActionTypes.REGISTER_USER_FAILURE,
    payload: error
  };
}



export function loginUser(credentials, desiredPath = "/"){
  console.log('loginUwr', credentials);
    const req = axios({
        method: 'post',
        url: `/auth/local`,
        data: credentials
    })
    return {
      type: ActionTypes.LOGIN_USER,
      payload: req
    };r
}

export function loginUserSuccess(user){
  console.log('loginUserSuccess', user);
  setCookie('token', user.token);

  return {
    type: ActionTypes.LOGIN_USER_SUCCESS,
    payload: user
  }
}

export function loginUserFailure(error){
  return {
    type: ActionTypes.LOGIN_USER_FAILURE,
    payload: error
  }
}

export function resetLoggedInUser(){
  deleteCookie('token')
  return {
    type: ActionTypes.RESET_LOGGED_IN_USER
  }
}

export function resetActiveUser() {
  return {
    type: ActionTypes.RESET_ACTIVE_USER
  }
}

export function createUser(props){
  const request = axios({
    method: 'post',
    data: props,
    url: `/api/users`
    //headers: {
    //  'Authorization': `Bearer tokenFromStorage`
    // }
  });

  return {
    type: ActionTypes.CREATE_USER,
    payload: request
  };
}

export function createUserSuccess(newUser){
  return {
    type: ActionTypes.CREATE_USER,
    payload: newUser
  }
}

export function createUserFailure(error) {
  return {
    type: ActionTypes.CREATE_USER_FAILURE,
    payload: error
  }
}

export function resetNewUser() {
  return {
    type: ActionTypes.RESET_NEW_USER
  }
}

export function deleteUser(id){
  const request = axios({
    method: 'delete',
    url: `/api/users/id`
    // headers: {
    //   'Authorization': `Bearer tokenFromStorage`
    // }
  });
  return {
    type: ActionTypes.DELETE_USER,
    payload: request
  };
}

export function deleteUserSuccess(deletedUser){
  return {
    type: ActionTypes.DELETE_USER_SUCCESS,
    payload: deletedUser
  }
}

export function deleteUserFailure(response){
  return {
    type: ActionTypes.DELETE_USER_FAILURE,
    payload: response
  }
}

export function resetDeletedUser() {
  return {
    type: ActionTypes.RESET_DELETED_USER
  }
}