import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const deviceReducer = ( state = { isMobile: false }, action) => state

const combineStore = rootReducer => ( preLoadedState, history ) => {
    const reduxRouterMiddleware = routerMiddleware(history)
    return createStore(
        rootReducer,
        preLoadedState,
        composeWithDevTools(
            applyMiddleware(
                thunk,
                reduxRouterMiddleware
            )
        )
    )
}

export const rootReducer = combineReducers({
    router: routerReducer,
    device: deviceReducer
})

export const configStore = combineStore(rootReducer)