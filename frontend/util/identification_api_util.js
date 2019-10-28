export const addIdentification = identification => (
  $.ajax({
    method: 'post',
    url: '/api/identifications',
    data: {
      identification
    },
  })
)

export const fetchIdentifications = data => (
  $.ajax({
    method: 'get',
    url: '/api/identifications',
    data
  })
)

export const deleteIdentification = id => (
  $.ajax({
    method: 'delete',
    url: `/api/identification/${id}`,
  })
)