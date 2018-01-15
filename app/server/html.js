import React from 'react'
import PropTypes from 'prop-types'

const Html = ({ content, state }) => (
    <html>
        <head>
            <title>React SSR Init state</title>
        </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{
          __html: `window.__INITIAL_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
        }} />
        <script src="/static/bundle.js"></script>
      </body>
    </html>
)

Html.propTypes = {
    content: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired
}

export default Html