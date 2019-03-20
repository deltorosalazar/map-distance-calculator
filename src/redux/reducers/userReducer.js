import { ON_REQUEST, ON_REQUEST_SUCCESS, ON_REQUEST_FAILURE } from '../actions/service'

const defaultState = {
  onRequest: false,
  onRequestSuccess: false,
  onRequestFailure: false
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ON_REQUEST:      
      return {
        ...state,
        onRequest: true,
        onRequestSuccess: false,
        onRequestFailure: false
      }

    case ON_REQUEST_SUCCESS:
      return {
        ...state,
        onRequest: false,
        onRequestSuccess: true,
        onRequestFailure: false
      }

    case ON_REQUEST_FAILURE:
      return {
        ...state,
        onRequest: false,
        onRequestSuccess: false,
        onRequestFailure: true
      }

    default:
      return state;
  }
}

export default userReducer