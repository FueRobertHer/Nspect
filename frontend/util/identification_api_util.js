export const addIdentification = identification => (
  $.ajax({
    method: 'post',
    url: '/api/identifications',
    data: {
      identification
    },
  })
)

export const fetchIdentifications = obsId => (
  $.ajax({
    method: 'get',
    url: `/api/identifications/`,
    data: {
      obsId
    }
  })
)

export const deleteIdentification = id => (
  $.ajax({
    method: 'delete',
    url: `/api/identifications/${id}`,
  })
)