import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import observationsReducer from './observations_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  observations: observationsReducer,
});

export default entitiesReducer;