import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { defaultState } from "./defaultState";
import { rootReducer } from "../Reducers/rootReducer";

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
