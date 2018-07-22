import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './Style/Clearfix.scss'

import { App } from '@/App'
import registerServiceWorker from '@/registerServiceWorker'
import { Store } from '@/Store'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('Root') as HTMLElement
)

registerServiceWorker()
