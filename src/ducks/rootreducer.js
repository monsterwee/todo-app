import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}

const rootreducer = combineReducers(reducers)

export default rootreducer
