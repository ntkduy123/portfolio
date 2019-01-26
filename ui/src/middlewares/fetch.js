import { BASE_URL } from '../Constants'

const fetchMiddleware = store => next => (action) => {
  if (!action || !action.request) {
    return next(action)
  }

  const fetchAction = { ...action }
  const fetchRequest = createFetchRequest(fetchAction)

  Promise.race([fetchRequest])
    .then((response) => {
      if (!response.ok && response.status >= 400 && response.statusText) {
        throw Error(response.statusText)
      }

      const contentPromise = response.json()

      contentPromise.then((content) => {
        store.dispatch({
          type: `${action.type}_OK`,
          params: action.params,
          data: content,
          headers: response.headers
        })
      })
    })
    .catch((error) => {
      store.dispatch({
        type: `${action.type}_ERROR`,
        params: action.params,
        data: error
      })
    })

  return next(action)
}

const createFetchRequest = (action) => {
  const {
    url = '/',
    method = 'GET',
    headers = {},
    type
  } = action.request


  let body
  let contentType
  if (['POST'].indexOf(method) >= 0 && action.params) {
    if (type === 'upload') {
      body = action.params
    }
    else {
      body = JSON.stringify(action.params)
      contentType = 'application/json'
    }
  }

  const queryParams = ['GET'].indexOf(method) >= 0 && action.params
    ? `?${getEncodedUrlParams(action.params)}`
    : ''

  const fetchRequest = fetch(`${getApiUrl(url)}${queryParams}`, {
    method,
    headers: {
      ...(contentType && { 'Content-Type': contentType }),
      ...headers
    },
    body
  })
  return fetchRequest
}

const getApiUrl = (url) => {
  if (/^http[s]*:\/\/.+/.test(url)) {
    return url
  }

  // eslint-disable-next-line
  return `${BASE_URL}${url}`
}

const getEncodedUrlParams = params => Object.keys(params)
  .map(key => (params[key] ? `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}` : ''))
  .join('&')

export default fetchMiddleware
