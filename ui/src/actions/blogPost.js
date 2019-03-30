import {
  ADD_POST,
  UPLOAD_POST_IMAGE,
  GET_POST_BY_ID,
  RESET_FORM
} from './types'

export const getPostById = id => ({
  type: GET_POST_BY_ID,
  request: {
    url: `api/post/${id}`,
    method: 'GET'
  }
})

export const addPost = post => ({
  type: ADD_POST,
  request: {
    url: 'api/post',
    method: 'POST'
  },
  params: post
})

export const uploadPostImage = data => ({
  type: UPLOAD_POST_IMAGE,
  request: {
    url: 'api/post/image',
    method: 'POST',
    type: 'upload'
  },
  params: data
})

export const resetForm = () => ({
  type: RESET_FORM
})
