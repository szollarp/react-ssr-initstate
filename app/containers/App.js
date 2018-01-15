import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import Routes from '../routes'

class App extends Component {

    componentDidCatch(error, info) {
       console.log(error, info)
    }

    render() {
        return (
            <Switch>
                { renderRoutes(Routes) }
            </Switch>
        )
    }
}

export default App