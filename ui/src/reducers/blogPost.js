import {
  GET_POST_BY_ID,
  GET_POST_BY_ID_OK,
  GET_POST_BY_ID_ERROR
} from "../actions/types";

const INITIAL_STATE = {
  post: {},
  loading: false,
  error: false
}

export default (state = INITIAL_STATE, payload) => {
  switch (payload.type) {
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
    default:
      return state
  }
}