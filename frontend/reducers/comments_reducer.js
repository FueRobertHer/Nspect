import { RECEIVE_COMMENTS } from '../actions/comments_action';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    default:
      return state;
  }
}


export default commentsReducer;