import {
  ADD_POST,
  GET_POST,
  GET_POST_CATEGORY,
  UPLOAD_POST_IMAGE
} from './types'

export const getAllPost = () => ({
  type: GET_POST,
  request: {
    url: 'api/post',
    method: 'GET'
  }
})

export const getAllCategory = () => ({
  type: GET_POST_CATEGORY,
  request: {
    url: 'api/post/category',
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
    url: 'api/post/upload',
    method: 'POST',
    type: 'upload'
  },
  params: data
})
