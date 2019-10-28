import * as APIComment from '../util/comments_api_util';

export const RECEIVE_COMMENTS = "RECEIVE COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "REVEIVE_COMMENT_ERRORS";

export const receiveObservations = observations => ({
  type: RECEIVE_OBSERVATIONS,
  observations
})

export const receiveObservation = observation => ({
  type: RECEIVE_OBSERVATION,
  observation
})

export const removeObservation = id => ({
  type: REMOVE_OBSERVATION,
})

export const receiveObsErrors = errors => ({
  type: RECEIVE_OBS_ERRORS,
  errors
})