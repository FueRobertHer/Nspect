import {
  RECEIVE_IDENTIFICATIONS,
  RECEIVE_IDENTIFICATION,
  REMOVE_IDENTIFICATION
} from '../actions/identifications_actions';
import { removeByKey } from './reducer_util';

const identificationsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_IDENTIFICATIONS:
      return Object.assign({}, state, action.identifications)

    case RECEIVE_IDENTIFICATION:
      return Object.assign({}, state, {[action.identification.id]: action.identification})
      
    case REMOVE_IDENTIFICATION:
      return removeByKey(state, action.identification.id)

    default:
      return state;
  }
}


export default identificationsReducer;