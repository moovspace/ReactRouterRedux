import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/reducer'

// Middleware :)
const middleware = [thunk];

// Initial state
const initState = {}

// Create store
const store = createStore(
    reducer,
    initState,
    compose(
        applyMiddleware(...middleware),
        // Chrome extension here
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

// Remember export store
export default store;