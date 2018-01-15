import React from 'react'
import { hydrate } from 'react-dom'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import App from './containers/App'

const AppOnServer = (req, store) => (
    <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
            <App/>
        </StaticRouter>
    </Provider>
) 

const AppOnClient = (store, history) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
) 

export const renderAppOnServer = (req, store) => 
    renderToString(AppOnServer(req, store))
export const renderAppOnClient = (dom, store, history ) => 
    hydrate(AppOnClient(store, history), dom)