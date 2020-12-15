import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import initial from "./initial";
import thunk from "redux-thunk";

// setup store
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initial,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;