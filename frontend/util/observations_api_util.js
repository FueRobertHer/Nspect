export const addObservation = observation => (
  $.ajax({
    method: 'post',
    url: '/api/observations',
    data: observation,
    contentType: false,
    processData: false,
  })
)

export const fetchObservations = data => (
  $.ajax({
    method: 'get',
    url: '/api/observations',
    data
  })
)

export const fetchObservation = id => (
  $.ajax({
    method: 'get',
    url: `/api/observations/${id}`
  })
)

export const updateObservation = observation => (
  $.ajax({
    method: 'patch',
    url: `/api/observations/${observation.id}`,
    data: observation,
    processData: false,
    contentType: false,
  })
)

export const deleteObservation = id => (
  $.ajax({
    method: 'delete',
    url: `/api/observations/${id}`
  })
)
