import { combineReducers } from 'redux'
import serviceReducer from './reducers/serviceReducer'
import userReducer from './reducers/userReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  serviceReducer,
  userReducer,
  form: formReducer
})