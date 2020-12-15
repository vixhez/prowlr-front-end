import { createStore } from "redux";
import initial from './initial';
import reducer from './reducer';
const store = createStore( reducer,
    initial, window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(), );

// subscribe to any changes
store.subscribe(() => {
    // get the current state using the getState method // we can get the state, but not update it
    let state = store.getState();
      // for now, just log the new count
    });
export default store;