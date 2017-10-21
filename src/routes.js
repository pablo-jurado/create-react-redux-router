import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Counter from './containers/counter'

export default (
  <Route path='/' component={App} >
    <IndexRoute component={Home} />
    <Route path='/counter' component={Counter} />
  </Route>
)
