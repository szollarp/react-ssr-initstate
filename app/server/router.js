import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { matchRoutes } from 'react-router-config'

import Html from './html'
import Routes from '../routes'
import { renderAppOnServer } from '../render'
import { configStore } from '../store'

const Router = async (req, res) => {
    const [ matchedRoute ] = matchRoutes(Routes, req.url)
	if (!matchedRoute) {
        res.status(404).send('404 - Page not found')
        return
    }

    const { match, route } = matchedRoute
    const loadInitial = route.component.loadInitial
    const store = configStore({ device: { isMobile: true } })

    if (loadInitial) {
        await loadInitial(store, match, req, req.cookies)
    }
    
    const content = renderAppOnServer(req, store)
    const html = <Html content={content} state={{}} />

    const staticMarkup = ReactDOMServer.renderToStaticMarkup(html)
    res.status(200).send(`<!doctype html>\n${staticMarkup}`)
}

export default Router