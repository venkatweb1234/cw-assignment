import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootreducers } from "./rootReducer";
export const middleware = [thunk];
export const store = createStore(
    rootreducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
