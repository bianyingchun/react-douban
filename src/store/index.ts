import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import reducerModels from "./reducers";

const composeEnhancers =
  ((window as any) && (window as any).REDUX_DEVTOOLS_EXTENSION_COMPOSE) ||
  compose;
const reducer = combineReducers(reducerModels);

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
