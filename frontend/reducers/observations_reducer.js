import {
  RECEIVE_OBSERVATIONS,
  RECEIVE_OBSERVATION,
  REMOVE_OBSERVATION
} from '../actions/observations_actions';
import {
  RECEIVE_IDENTIFICATION,
  REMOVE_IDENTIFICATION,
} from '../actions/identifications_actions';
import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/comments_action';
import { removeByKey } from './reducer_util';

const observationsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_OBSERVATIONS:
      return Object.assign({}, state, action.observations);

    case RECEIVE_OBSERVATION:
      return Object.assign({}, state, {[action.observation.id]: action.observation});

    case REMOVE_OBSERVATION:
      return removeByKey(state, action.observation.id);

    case RECEIVE_IDENTIFICATION:
      return {
        ...state,
        [action.identification.observation_id]: {
          ...state[action.identification.observation_id],
          identifications: [...state[action.identification.observation_id].identifications, action.identification.id]
        }
      }

    case REMOVE_IDENTIFICATION:
      return {
        ...state,
        [action.identification.observation_id]: {
          ...state[action.identification.observation_id],
          identifications: state[action.identification.observation_id].identifications.filter(id => id !== action.identification.id)
        }
      }

    case RECEIVE_COMMENT:
      return {
        ...state,
        [action.comment.observation_id]: {
          ...state[action.comment.observation_id],
          comments: [...state[action.comment.observation_id].comments, action.comment.id]
        }
      }

    case REMOVE_COMMENT:
      return {
        ...state,
        [action.comment.observation_id]: {
          ...state[action.comment.observation_id],
          comments: state[action.comment.observation_id].comments.filter(id => id !== action.comment.id)
        }
      }

    default:
      return state;
  }
}


export default observationsReducer;