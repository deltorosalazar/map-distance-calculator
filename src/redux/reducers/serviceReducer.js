import { ON_REQUEST, ON_REQUEST_SUCCESS, ON_REQUEST_FAILURE, RESET_REQUEST_VALUES, SAVE_RESULTS } from '../actions/service'

const defaultState = {
  onRequest: false,
  onRequestSuccess: false,
  onRequestFailure: false,
  results: {
    distance: null,
    estimatedTime: null
  }
}

const serviceReducer = (state = defaultState, action) => {
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

    case SAVE_RESULTS:    
      return {
        ...state,        
        results: {
          ...state.results,
          distance: action.payload.distance,
          estimatedTime: action.payload.estimatedTime,
          markers: action.payload.markers,          
        }
      }

    case RESET_REQUEST_VALUES:
      return {
        ...state,        
        onRequest: false,
        onRequestSuccess: false,
        onRequestFailure: false,
      }     

    default:
      return state;
  }
}

export default serviceReducer