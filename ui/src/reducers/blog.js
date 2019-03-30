import { withSessionReducer } from '../helpers/reducer'
import {
  GET_POST,
  GET_POST_OK,
  GET_POST_ERROR,
  GET_POST_CATEGORY,
  GET_POST_CATEGORY_OK,
  GET_POST_CATEGORY_ERROR
} from '../actions/types'

const INITIAL_STATE = {
  postList: [],
  postCategoryList: [],
  loading: false,
  error: false
}

const reducer = (state = INITIAL_STATE, payload) => {
  switch (payload.type) {
    case GET_POST:
      return {
        ...state,
        loading: true
      }
    case GET_POST_OK:
      return {
        ...state,
        postList: payload.data,
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
        postCategoryList: payload.data,
        loading: false
      }
    case GET_POST_CATEGORY_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}

export default withSessionReducer(reducer, INITIAL_STATE)
