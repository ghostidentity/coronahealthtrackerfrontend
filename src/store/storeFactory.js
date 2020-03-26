import appReducers from "../reducers/rootReducer";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { customMiddleware } from './customMiddleware';
import{  createLogger } from 'redux-logger';
import thunk from "redux-thunk";

const middleware = [];
if(process.env.ENVIRONMENT !== 'production') {
  const logger = createLogger({
    predicate: (getState, action) => action.type !== 'LOGIN',
    collapsed: true,
    level: console.log,
    colors: {
      title: () => '#008000'
    },
    duration: true,
  });
  middleware.push(logger);
}

const composeEnhancers = composeWithDevTools({});


export default  (initState = {}) =>  createStore(appReducers, initState, composeEnhancers(
    applyMiddleware(thunk, customMiddleware),
    applyMiddleware(...middleware)
  ));