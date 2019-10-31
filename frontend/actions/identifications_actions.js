import * as APIId from '../util/identification_api_util';

export const RECEIVE_IDENTIFICATIONS = "RECEIVE IDENTIFICATIONS";
export const RECEIVE_IDENTIFICATION = "RECEIVE_IDENTIFICATION";
export const REMOVE_IDENTIFICATION = "REMOVE_IDENTIFICATION";
export const RECEIVE_ID_ERRORS = "REVEIVE_ID_ERRORS";

export const receiveIdentifications = identifications => ({
  type: RECEIVE_IDENTIFICATIONS,
  identifications
})

export const receiveIdentification = identification => ({
  type: RECEIVE_IDENTIFICATION,
  identification
})

export const removeIdentification = id => ({
  type: REMOVE_IDENTIFICATION,
})

export const receiveIdErrors = errors => ({
  type: RECEIVE_ID_ERRORS,
  errors
})

export const addIdentification = identification => dispatch => APIId.addIdentification(identification)
  .then(identification => dispatch(receiveIdentification(identification)))

export const fetchIdentifications = () => dispatch => APIId.fetchIdentifications()
  .then(identifications => dispatch(receiveIdentifications(identifications)))

// export const fetchIdentification = identificationId => dispatch => APIId.fetchIdentification(identificationId)
//   .then(identification => dispatch(receiveIdentification(identification)))

// export const updateIdentification = identification => dispatch => APIId.updateIdentification(identification)
//   .then(identification => dispatch(receiveIdentification(identification)))

export const deleteIdentification = identificationId => dispatch => APIId.deleteIdentification(identificationId)
  .then(identification => dispatch(removeIdentification(identificationId)))
