import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default rootReducer;