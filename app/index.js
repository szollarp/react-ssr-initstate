import 'babel-polyfill'

import { createBrowserHistory } from 'history'

import { renderAppOnClient } from './render'
import { configStore } from './store'

const preLoadedState = window.__PRELOADED_STATE__
const history = createBrowserHistory()
const store = configStore(preLoadedState, history)

renderAppOnClient(document.getElementById('root'), store, history)