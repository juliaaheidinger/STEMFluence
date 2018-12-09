let baseUrl = process.env.REACT_APP_API_URL

export function getApplication() {
  return makeRequest('/application')
}

export function postApplication(application) {
  return makeRequest('/application', 'post', application).catch(err =>
    console.error(err)
  )
}

export function patchApplication(application) {
  return makeRequest(
    `/application/${application._id}`,
    'patch',
    application
  ).catch(err => console.error(err))
}

export function deleteApplication(id) {
  return makeRequest(`/application/${id}`, 'delete').catch(err =>
    console.error(err)
  )
}

function makeRequest(path, method = 'get', body) {
  path = path.startsWith('/') ? path : '/' + path
  baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  body = JSON.stringify(body)

  return fetch(baseUrl + path, {
    method: method.toUpperCase(),
    headers: ['post', 'patch'].includes(method)
      ? { 'Content-Type': 'application/json' }
      : {},
    body
  })
    .then(res => res.json())
    .catch(err => console.error(err))
}
