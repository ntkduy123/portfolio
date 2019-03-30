import { REHYDRATE } from 'redux-persist'

export const withSessionReducer = (reducer, initialState) => (state, action) => {
  const { type, ...payload } = action

  switch (type) {
    case REHYDRATE:
      return {
        ...state
      }
  }
  return reducer(state, action)
}
