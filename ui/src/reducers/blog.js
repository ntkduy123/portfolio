import {
  GET_POST,
  GET_POST_OK,
  GET_POST_ERROR,
  GET_POST_CATEGORY,
  GET_POST_CATEGORY_OK,
  GET_POST_CATEGORY_ERROR,
  ADD_POST,
  ADD_POST_OK,
  ADD_POST_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  categories: [],
  loading: false,
  error: false
}

export default (state = INITIAL_STATE, payload) => {
  switch (payload.type) {
    case GET_POST:
      return {
        ...state,
        loading: true
      }
    case GET_POST_OK:
      return {
        ...state,
        posts: payload.data,
        loading: false
      }
    case GET_POST_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    case GET_POST_CATEGORY:
      return {
        ...state,
        loading: true
      }
    case GET_POST_CATEGORY_OK:
      return {
        ...state,
        categories: payload.data,
        loading: false
      }
    case GET_POST_CATEGORY_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    case ADD_POST:
      return {
        ...state,
        loading: true
      }
    case ADD_POST_OK:
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
    default:
      return state
  }
}