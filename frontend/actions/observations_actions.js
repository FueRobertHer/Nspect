import * as APIObs from '../util/observations_api_util';

export const RECEIVE_OBSERVATIONS = "RECEIVE OBSERVATIONS";
export const RECEIVE_OBSERVATION = "RECEIVE_OBSERVATION";
export const REMOVE_OBSERVATION = "REMOVE_OBSERVATION";
export const RECEIVE_OBS_ERRORS = "REVEIVE_OBS_ERRORS";


export const receiveObservations = observations => ({
  type: RECEIVE_OBSERVATIONS,
  observations
})

export const receiveObservation = observation => ({
  type: RECEIVE_OBSERVATION,
  observation
})

export const removeObservation = observation => ({
  type: REMOVE_OBSERVATION,
  observation
})

export const receiveObsErrors = errors => ({
  type: RECEIVE_OBS_ERRORS,
  errors
})

export const addObservation = observation => dispatch => APIObs.addObservation(observation)
  .then( observation => dispatch(receiveObservation(observation)))
  // .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const fetchObservations = () => dispatch => APIObs.fetchObservations()
  .then( observations => dispatch(receiveObservations(observations)))

export const fetchObservation = observationId => dispatch => APIObs.fetchObservation(observationId)
  .then( observation => dispatch(receiveObservation(observation)))

export const updateObservation = observation => dispatch => APIObs.updateObservation(observation)
  .then( observation => dispatch(receiveObservation(observation)))

export const deleteObservation = observationId => dispatch => APIObs.deleteObservation(observationId)
  .then( observation => dispatch(removeObservation(observation)))
