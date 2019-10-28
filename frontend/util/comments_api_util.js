export const addComment = comment => (
  $.ajax({
    method: 'post',
    url: '/api/comments',
    data: {
      comment
    }
  })
)

export const fetchComments = data => (
  $.ajax({
    method: 'get',
    url: '/api/comments',
    data
  })
)

export const deleteComment = id => (
  $.ajax({
    method: 'delete',
    url: `/api/comment/${id}`,
  })
)