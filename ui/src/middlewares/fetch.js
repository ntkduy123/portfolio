import { BASE_URL } from '../Constants'

const fetchMiddleware = store => next => (action) => {
  if (!action || !action.request) {
    return next(action)
  }

  const fetchAction = { ...action }
  const { type } = fetchAction.request
  const fetchRequest = createFetchRequest(fetchAction)

  Promise.race([fetchRequest])
    .then((response) => {
      if (!response.ok && response.status >= 400 && response.statusText) {
        throw Error(response.statusText)
      }

      let contentPromise = response.json()

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
  } = action.request

  const body = ['POST'].indexOf(method) >= 0 && action.params
    ? JSON.stringify(action.params)
    : undefined
  
  const queryParams = ['GET'].indexOf(method) >= 0 && action.params
    ? `?${getEncodedUrlParams(action.params)}`
    : ''

    console.log(getApiUrl(url))

    const fetchRequest = fetch(`${getApiUrl(url)}${queryParams}`, {
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
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