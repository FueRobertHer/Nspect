export const addObservation = observation => (
  $.ajax({
    method: 'post',
    url: '/api/observations',
    data: { observation }
  })
)

export const fetchObservations = () => (
  $.ajax({
    method: 'get',
    url: '/api/observations'
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
    data: { observation }
  })
)

export const destroyObservation = id => (
  $.ajax({
    method: 'delete',
    url: `/api/observations/${id}`
  })
)

export const addIdentification = identification => (
  $.ajax({
    method: 'post',
    url: '/api/identification',
    data : { identification },
  })
)

export const destroyIdentification = id => (
  $.ajax({
    method: 'delete',
    url: `/api/identification/${id}`,
  })
)

export const addComment = comment => (
  $.ajax({
    method: 'post',
    url: '/api/comment/',
    data: { comment }
  })
)

export const destoryComment = id => (
  $.ajax({
    method: 'delete',
    url: `/api/comment/${id}`,
  })
)