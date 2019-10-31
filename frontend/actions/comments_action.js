import * as APIComment from '../util/comments_api_util';

export const RECEIVE_COMMENTS = "RECEIVE COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "REVEIVE_COMMENT_ERRORS";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

// export const receiveComment = comment => ({
//   type: RECEIVE_COMMENT,
//   comment
// })

export const removeComment = id => ({
  type: REMOVE_COMMENT,
})

export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
})

export const addComment = comment => dispatch => APIComment.addComment(comment)
  .then(comment => dispatch(receiveComment(comment)))

export const fetchComments = () => dispatch => APIComment.fetchComments()
  .then(comments => dispatch(receiveComments(comments)))

// export const fetchComment = commentId => dispatch => APIComment.fetchComment(commentId)
//   .then(comment => dispatch(receiveComment(comment)))

// export const updateComment = comment => dispatch => APIComment.updateComment(comment)
//   .then(comment => dispatch(receiveComment(comment)))

export const deleteComment = commentId => dispatch => APIComment.deleteComment(commentId)
  .then(comment => dispatch(removeComment(commentId)))