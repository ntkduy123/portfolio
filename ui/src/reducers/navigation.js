import {
  HOME_PAGE
} from '../constants/navigation'
import { CHANGE_ROUTE } from '../actions/types'

const INITIAL_STATE = {
  routeName: HOME_PAGE
}

export default (state = INITIAL_STATE, { type, routeName }) => {
  switch (type) {
    case CHANGE_ROUTE:
      return {
        ...state,
        routeName
      }
    default:
      return {
        ...state
      }
  }
}
