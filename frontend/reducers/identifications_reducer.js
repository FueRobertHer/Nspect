import { RECEIVE_IDENTIFICATIONS } from '../actions/identifications_actions';

const identificationsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_IDENTIFICATIONS:
      return action.identifications;
    default:
      return state;
  }
}


export default identificationsReducer;