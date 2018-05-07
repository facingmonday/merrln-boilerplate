import { combineReducers } from 'redux';
import UserReducer from './user';
import DashboardReducer from './dashboard';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    user: UserReducer,
    form: formReducer,
    dashboard: DashboardReducer
})

export default rootReducer;