import { 
    FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_LOADING, RESET_USERS,
    FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_LOADING, RESET_ACTIVE_USER,
    CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, RESET_NEW_USER,
    UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE,
    DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_FAILURE, RESET_DELETED_USER,
    LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, RESET_LOGGED_IN_USER,
    REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE,
    FETCH_ME, FETCH_ME_SUCCESS, FETCH_ME_FAILURE
  } from '../actionTypes/user';
  
  const initialState = {
      usersList: {
        users: [],
        error: null,
        loading: false
      },
      loggedInUser: {
        authenticated: false,
        user: null,
        error: null,
        loading: false
      },
      activeUser: {
        user:null,
        error: null,
        loading: false
      },
      newUser: {
        user: null,
        error: null,
        loading: false
      },
      deleteUser: {
        user: null,
        error: null,
        loading: false
      }
  };
  
  export default (state = initialState, action) => {
      let error;
      switch (action.type) {
  
        case FETCH_USERS:// start fetching posts and set loading = true
          return { ...state, usersList: {users:[], error: null, loading: true} }; 
        case FETCH_USERS_LOADING:
          return { ...state, usersList: {users:[], error: null, loading: true} }; 
        case FETCH_USERS_SUCCESS:// return list of posts and make loading = false
          return { ...state, usersList: {users: action.payload, error:null, loading: false} };
        case FETCH_USERS_FAILURE:// return error and make loading = false
          error = action.payload || {message: action.payload.message};
          return { ...state, usersList: {users: [], error: error, loading: false} };
        case RESET_USERS:// reset postList to initial state
          return { ...state, usersList: {users: [], error:null, loading: false} };
  
        case FETCH_USER:
          return { ...state, activeUser:{...state.activeUser, loading: true}};
        case FETCH_USER_LOADING:
          return { ...state, activeUser:{...state.activeUser, loading: true}};
        case FETCH_USER_SUCCESS:
          return { ...state, activeUser: {user: action.payload, error:null, loading: false}};
        case FETCH_USER_FAILURE:
          error = action.payload || {message: action.payload.message};
          return { ...state, activeUser: {user: null, error:error, loading:false}};
        case RESET_ACTIVE_USER:
          return { ...state, activeUser: {user: null, error:null, loading: false}};

        case LOGIN_USER:
          return { ...state, loggedInUser:{...state.loggedInUser, loading: true}};
        case LOGIN_USER_SUCCESS:
          return { ...state, loggedInUser: {authenticated: true, user: action.payload, error:null, loading: false}};
        case LOGIN_USER_FAILURE:
          error = action.payload || {message: action.payload.message};
          return { ...state, loggedInUser: {user: null, error:error, loading:false}};
          break;
        case RESET_LOGGED_IN_USER:
          return {...state,  loggedInUser:{user: null, error: null, loading: false}};
        
        case REGISTER_USER:
          return { ...state, loggedInUser:{...state.loggedInUser, loading: true}};
        case REGISTER_USER_SUCCESS:
          return { ...state, loggedInUser: {authenticated: true, user: action.payload, error:null, loading: false}};
        case REGISTER_USER_FAILURE:
          error = action.payload || {message: action.payload.message};
          return { ...state, loggedInUser: {user: null, error:error, loading:false}};
          break;

        case FETCH_ME:
          return { ...state, loggedInUser:{...state.loggedInUser, loading: true}};
        case FETCH_ME_SUCCESS:
          return { ...state, loggedInUser: {authenticated: true, user: action.payload, error:null, loading: false}};
        case FETCH_ME_FAILURE:
          error = action.payload || {message: action.payload.message};
          return { ...state, loggedInUser: {authenticated: false, user: null, error:error, loading:false}};
          break;

        case CREATE_USER:
          return {...state, newUser: { ...state.newUser, loading: true}};
        case CREATE_USER_SUCCESS:
          return {...state, newUser: { user: action.payload, error:null, loading: false}}
        case CREATE_USER_FAILURE:
          error = action.payload || { message: action.payload.message};
          return {...state, newUser: { user: null, error: error, loading: false}}
        case RESET_NEW_USER:
          return {...state,  newUser:{user: null, error: null, loading: false}}
  
        case UPDATE_USER:
          return {...state, activeUser: { ...state.activeUser, loading: true}};
        case UPDATE_USER_SUCCESS:
          return {...state, activeUser: { user: action.payload, error:null, loading: false}}
        case UPDATE_USER_FAILURE:
          error = action.payload || { message: action.payload.message};
          return {...state, activeUser: { user: null, error: error, loading: false}}
        
  
        case DELETE_USER:
          return { ...state, deletedPost: { ...state.deletedPost, loading: true}};
        case DELETE_USER_SUCCESS:
          return { ...state, deletedUser: {user: action.payload, error: null, loading: false}};
        case DELETE_USER_FAILURE:
          error = action.payload || {message: action.payload.message};
          return {...state, deletedUser: {user:null, error:error, loading: false}}
        case RESET_DELETED_USER:
          return {...state,  deletedUser:{user:null, error:null, loading: false}}
        
        
        default:
          return state;
      }
    }
  
    