import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import observationsReducer from './observations_reducer';
import identificationsReducer from './identifications_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  observations: observationsReducer,
  identifications: identificationsReducer,
  comments: commentsReducer
});

export default entitiesReducer;