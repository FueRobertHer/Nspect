import * as APIObs from '../util/observations_api_util';

export const RECEIVE_OBSERVATIONS = "RECEIVE OBSERVATIONS";
export const RECEIVE_OBSERVATION = "RECEIVE_OBSERVATION";
export const REMOVE_OBSERVATION = "REMOVE_OBSERVATION";

export const receiveObservations = observations => ({
  type: RECEIVE_OBSERVATIONS,
  observations
})

export const receiveObservation = observationId => ({
  type: RECEIVE_OBSERVATION,
  observationId
})

export const removeObservation = id => ({
  type: REMOVE_OBSERVATION,
})

export const fetchObservations = () => dispatch => APIObs.fetchObservations()
  .then( observations => dispatch(receiveObservations(observations)))

export const fetchObservation = observationId => dispatch => APIObs.fetchObservation(observationId)
  .then( observation => dispatch(receiveObservation(observation)))

export const deleteObservation = observationId => dispatch => APIObs.deleteObservation(observationId)
  .then( observation => dispatch(removeObservation(observationId)))