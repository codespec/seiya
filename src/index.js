import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch} from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import registerServiceWorker from './registerServiceWorker'
import configureSotre from './reactStore'

import './index.scss'

import App from './containers/App'
import Home from './containers/Home'
import Register from './containers/Register'

const reactStore = configureSotre()

injectTapEventPlugin()

render(
  <Provider store={reactStore}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
registerServiceWorker()
