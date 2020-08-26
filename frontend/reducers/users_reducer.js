import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';
import { RECEIVE_OBSERVATION, REMOVE_OBSERVATION } from '../actions/observations_actions'; 
import { RECEIVE_IDENTIFICATION, REMOVE_IDENTIFICATION } from '../actions/identifications_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comments_action';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign( {}, state, {[action.currentUser.id]: action.currentUser });

    case RECEIVE_USERS:
      return Object.assign({}, state, action.users);

    case RECEIVE_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});

    case RECEIVE_OBSERVATION:
      return {
        ...state,
        [action.observation.observer_id]: {
          ...state[action.observation.observer_id],
          observations: [...state[action.observation.observer_id].observations, action.observation.id]
        }
      }

    case REMOVE_OBSERVATION:
      return {
        ...state,
        [action.observation.observer_id]: {
          ...state[action.observation.observer_id],
          observations: state[action.observation.observer_id].observations.filter(id => id !== action.observation.id)
        }
      }

    case RECEIVE_COMMENT:
      return {
        ...state,
        [action.comment.commenter_id]: {
          ...state[action.comment.commenter_id],
          comments: [...state[action.comment.commenter_id].comments, action.comment.id]
        }
      }

    case REMOVE_COMMENT:
      return {
        ...state,
        [action.comment.commenter_id]: {
          ...state[action.comment.commenter_id],
          comments: state[action.comment.commenter_id].comments.filter(id => id !== action.comment.id)
        }
      }

    case RECEIVE_IDENTIFICATION:
      return {
        ...state,
        [action.identification.identifier_id]: {
          ...state[action.identification.identifier_id],
          identifications: [...state[action.identification.identifier_id].identifications, action.identification.id]
        }
      }

    case REMOVE_IDENTIFICATION:
      return {
        ...state,
        [action.identification.identifier_id]: {
          ...state[action.identification.identifier_id],
          identifications: state[action.identification.identifier_id].identifications.filter(id => id !== action.identification.id)
        }
      }

    default:
      return state;
  }
}

export default usersReducer;