import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...state,
        authenticated: action.payload.authenticated,
        currentUser: action.payload.currentUser
      }
    case "USER_IS_SUBSCRIBER":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          role: action.payload.role
        }
      }
    default:
      return state
  }
}

export default rootReducer;