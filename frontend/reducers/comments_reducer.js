import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comments_action';
import { removeByKey } from './reducer_util';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, action.comments)

    case RECEIVE_COMMENT:
      return Object.assign({}, state, {[action.comment.id]: action.comment})

    case REMOVE_COMMENT:
      return removeByKey(state, action.comment.id)
    
    default:
      return state;
  }
}


export default commentsReducer;