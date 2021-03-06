import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import uploadReducer from "./upload";
 import commentsReducer from "./comments";
 import currentUserReducer from "./user";
 import allUsersReducer from "./allUsers";


const rootReducer = combineReducers({
  session: sessionReducer,
  upload: uploadReducer,
  comments: commentsReducer,
  user: currentUserReducer,
  allUsers: allUsersReducer,
  

});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
