import { createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import counter from "./reducers";
let rootReducer = combineReducers({
    counter
})
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
