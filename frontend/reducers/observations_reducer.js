import { RECEIVE_OBSERVATIONS, RECEIVE_OBSERVATION } from '../actions/observations_actions';

const observationsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_OBSERVATIONS:
      return action.observations;
    case RECEIVE_OBSERVATION:
      return {observation: action.observation}
    default:
      return state;
  }
}

export default observationsReducer;