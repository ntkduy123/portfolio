import { toast } from 'react-toastify'
import { withSessionReducer } from '../helpers/reducer'
import {
  ADD_POST,
  ADD_POST_OK,
  ADD_POST_ERROR,
  GET_POST_BY_ID,
  GET_POST_BY_ID_OK,
  GET_POST_BY_ID_ERROR,
  UPLOAD_POST_IMAGE,
  UPLOAD_POST_IMAGE_OK,
  UPLOAD_POST_IMAGE_ERROR,
  RESET_FORM
} from '../actions/types'

const INITIAL_STATE = {
  post: {
    id: undefined,
    title: undefined,
    author: undefined,
    content: undefined,
    postImages: [],
    postCategory: undefined,
    postStatus: undefined
  },
  loading: false,
  error: false
}

const reducer = (state = INITIAL_STATE, payload) => {
  switch (payload.type) {
    case ADD_POST:
      return {
        ...state,
        loading: true
      }
    case ADD_POST_OK:
      toast.success('Successfully created new post', {
        position: toast.POSITION.TOP_RIGHT
      })
      return {
        ...state,
        loading: false
      }
    case ADD_POST_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    case GET_POST_BY_ID:
      return {
        ...state,
        loading: true
      }
    case GET_POST_BY_ID_OK:
      return {
        ...state,
        post: payload.data,
        loading: false
      }
    case GET_POST_BY_ID_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    case UPLOAD_POST_IMAGE:
      return {
        ...state,
        loading: true
      }
    case UPLOAD_POST_IMAGE_OK:
      toast.success('Successfully upload post image', {
        position: toast.POSITION.TOP_RIGHT
      })
      const postImages = state.post.postImages
      postImages.push(payload.data)

      return {
        ...state,
        post: {
          ...state.post,
          postImages
        },
        loading: false
      }
    case UPLOAD_POST_IMAGE_ERROR:
      return {
        ...state,
        loading: true,
        error: true
      }
    case RESET_FORM:
      return INITIAL_STATE
    default:
      return state
  }
}

export default withSessionReducer(reducer, INITIAL_STATE)