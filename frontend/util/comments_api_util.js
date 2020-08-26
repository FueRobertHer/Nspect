export const addComment = comment => (
  $.ajax({
    method: 'post',
    url: '/api/comments',
    data: {
      comment
    }
  })
)

export const fetchComments = obsId => (
  $.ajax({
    method: 'get',
    url: `/api/comments/`,
    data: {
      obsId
    }
  })
)

export const deleteComment = id => (
  $.ajax({
    method: 'delete',
    url: `/api/comments/${id}`,
  })
)

// export const updateComment = comment => (
//   $.ajax({
//     method: 'patch',
//     url: 'api/comments',
//     data: {
//       comment
//     }
//   })
// )